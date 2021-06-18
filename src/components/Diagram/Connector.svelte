
<script lang="ts">
 import { createEventDispatcher } from 'svelte';
 import type { IPoint, IConnectorMoverPoint, ITableOnDiagram, IConnectorBreakerPoint } from './diagram';
 import { DirectionEnum } from './diagram';
 import { convertToString } from './convertToStr'
 import { getConnectorLineBreakPoints, getConnectorMoverPoints, removeUnnecessaryPoints } from './getRelationPoints'
 import Marker from "./Marker.svelte";
 import Point from "./Point.svelte";

export let relationPoints: IPoint[][];
export let pickedTable: ITableOnDiagram | null;

let pointsVisible: boolean = false;
let moverVisible: boolean = false;
let isLineMove: boolean = false;

let pointWithDir = null;
let pointWithDirIndex = null;

const dispatch = createEventDispatcher();

const pointsVisibleToggle = (): void => {
  pointsVisible = !pointsVisible;
}

const moverVisibleToggle = () => {
  moverVisible = !moverVisible;
}

const lineMoveStart = () => {
  isLineMove = true;
}

const lineMoveEnd = () => {
  isLineMove = false;
}

const updateRelationPoints = (points: IPoint[], index: number) => {
		dispatch('update', {points, index});
}

 export const moveLine = (ev: MouseEvent, moverPoint: IConnectorMoverPoint, index: number): void => {
   if (!isLineMove) {
     return;
  } 

  let start = relationPoints[index].find(el => el.x  === moverPoint.segmentStartPoint.x && el.y === moverPoint.segmentStartPoint.y);
  let end = relationPoints[index].find(el => el.x  === moverPoint.segmentEndPoint.x && el.y === moverPoint.segmentEndPoint.y);

  if (moverPoint.direction === DirectionEnum.h) {
    start.x = ev.offsetX;
    end.x = ev.offsetX;
  }

  if (moverPoint.direction === DirectionEnum.v) {
    start.y = ev.offsetY;
    end.y = ev.offsetY;
  }

  relationPoints[index] = removeUnnecessaryPoints(relationPoints[index]);
  updateRelationPoints(relationPoints[index], index);
 }

 export const breakLineOnMove = (ev: MouseEvent, breakerPoint: IConnectorBreakerPoint, index: number): void => {
  // relationPoints[index].splice(breakerPoint.rotatePoints.insertIndex + 1, 0, breakerPoint.rotatePoints.second);

   let start = relationPoints[index].find(el => el.x  === breakerPoint.rotatePoints.first.x && el.y === breakerPoint.rotatePoints.first.y);
   let end = relationPoints[index].find(el => el.x  === breakerPoint.rotatePoints.second.x && el.y === breakerPoint.rotatePoints.second.y);

   if (start && end) {
     if (breakerPoint.direction === DirectionEnum.h) {
      start.x = ev.offsetX;
      end.x = ev.offsetX;
    }
    if (breakerPoint.direction === DirectionEnum.v) {
      start.y = ev.offsetY;
      end.y = ev.offsetY;
    }
   } 

  relationPoints[index] = removeUnnecessaryPoints(relationPoints[index]);
  updateRelationPoints(relationPoints[index], index);
 }

</script>

<svg>
  {#each relationPoints as points, index}
    <polyline
      points={convertToString(points)}
      on:mousedown={() => {
          pointsVisibleToggle();
          moverVisibleToggle();
      }}
    />
  {#if moverVisible && !pickedTable}
      {#each getConnectorMoverPoints(points) as mover}
          <svg class='mover'
            viewBox="0 0 512 512" 
            xmlns="http://www.w3.org/2000/svg" 
            width="30"  
            height="30"
            x={ mover.direction === DirectionEnum.v ? mover.point.x - 15 : mover.point.x + 15} 
            y={ mover.point.y - 15 }
            on:mousemove={ (e) => moveLine(e, mover, index) }
            on:mousedown={ lineMoveStart }
            on:mouseup={ lineMoveEnd }
            on:mouseout={ lineMoveEnd }
          >
            <path  
              transform={ mover.direction === DirectionEnum.h ? "rotate(90)" : null }
              fill='grey'
              fill-opacity='1'
              d="M352 384h-48V128h48a16 16 0 0011-27L267 5c-6-7-16-7-22 0l-96 96c-5 4-6 11-4 17 3 6 9 10 15 10h48v256h-48a16 16 0 00-11 27l96 96c6 7 16 7 22 0l96-96a16 16 0 00-11-27z"
            />
          </svg>
      {/each}
      {#each getConnectorLineBreakPoints(points) as mover}
          <svg class='mover'
            viewBox="0 0 512 512" 
            xmlns="http://www.w3.org/2000/svg" 
            width="15"  
            height="15"
            x={ mover.direction === DirectionEnum.v ? mover.point.x - 7.5 : mover.point.x + 7.5} 
            y={ mover.point.y - 7.5 }
            on:mousemove={ (e) => breakLineOnMove(e, mover, index)}
          >
            <path  
              transform={ mover.direction === DirectionEnum.h ? "rotate(90)" : null }
              fill='red'
              fill-opacity='1'
              d="M352 384h-48V128h48a16 16 0 0011-27L267 5c-6-7-16-7-22 0l-96 96c-5 4-6 11-4 17 3 6 9 10 15 10h48v256h-48a16 16 0 00-11 27l96 96c6 7 16 7 22 0l96-96a16 16 0 00-11-27z"
            />
          </svg>
      {/each}
      <Point 
        routePoints={points} 
        {pointsVisible} 
        linesBreakPoints={getConnectorLineBreakPoints(points)} 
      />
    {/if}
{/each}

</svg>


<style>
  .mover {
    overflow: visible;
    cursor: pointer;
  }

  polyline {
    stroke: black;
    stroke-width: 0.5;
    fill: transparent;
  }
</style>



