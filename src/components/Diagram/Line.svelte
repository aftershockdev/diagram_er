
<script lang="ts">
 import { createEventDispatcher } from 'svelte';
 import type { IPoint, IPointWithDirection, ITableOnDiagram } from './diagram';
 import { DirectionEnum } from './diagram';
 import { convertToString } from './convertToStr'
 import { getLinesBreakPoints, getLinesDirectionMiddlePoints } from './getRelationPoints'
 import Marker from "./Marker.svelte";
 import Point from "./Point.svelte";

export let relationPoints: IPoint[][];
export let pickedTable: ITableOnDiagram | null;

let pointsVisible: boolean = false;
let moverVisible: boolean = false;
let isLineMove: boolean = false;

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

 export const moveLine = (ev: MouseEvent, dirPoint: IPointWithDirection, index: number): void => {
   if (!isLineMove) {
     return;
  } 

  let start = relationPoints[index].find(el => el.x  === dirPoint.segmentStartPoint.x && el.y === dirPoint.segmentStartPoint.y);
  let end = relationPoints[index].find(el => el.x  === dirPoint.segmentEndPoint.x && el.y === dirPoint.segmentEndPoint.y);

  if (dirPoint.direction === DirectionEnum.h) {
    start.x = ev.offsetX;
    end.x = ev.offsetX;
  }

  if (dirPoint.direction === DirectionEnum.v) {
    start.y = ev.offsetY;
    end.y = ev.offsetY;
  }

  relationPoints = relationPoints;
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
      {#each getLinesDirectionMiddlePoints(points) as dirPoint}
          <svg class='mover'
            viewBox="0 0 512 512" 
            xmlns="http://www.w3.org/2000/svg" 
            width="40"  
            height="40"
            x={ dirPoint.direction === DirectionEnum.v ? dirPoint.point.x - 20 : dirPoint.point.x + 20} 
            y={ dirPoint.point.y - 20 }
            on:mousemove={ (e) => moveLine(e, dirPoint, index) }
            on:mousedown={ lineMoveStart }
            on:mouseup={ lineMoveEnd }
            on:mouseout={ lineMoveEnd }
          >
            <path  
              transform={ dirPoint.direction === DirectionEnum.h ? "rotate(90)" : null }
              fill='grey'
              fill-opacity='1'
              d="M352 384h-48V128h48a16 16 0 0011-27L267 5c-6-7-16-7-22 0l-96 96c-5 4-6 11-4 17 3 6 9 10 15 10h48v256h-48a16 16 0 00-11 27l96 96c6 7 16 7 22 0l96-96a16 16 0 00-11-27z"
            />
          </svg>
      {/each}
      <Point 
        routePoints={points} 
        {pointsVisible} 
        linesBreakPoints={getLinesBreakPoints(points)} 
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



