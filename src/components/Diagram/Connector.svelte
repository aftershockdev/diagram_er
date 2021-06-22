
<script lang="ts">
 import { createEventDispatcher } from 'svelte';
 import type { IPoint, IConnectorMoverPoint, ITableOnDiagram, IConnectorBreakerPoint } from './diagram';
 import { DirectionEnum } from './diagram';
 import { convertToString } from './convertToStr'
 import { getConnectorLineBreakPoints, getConnectorMoverPoints, removeUnnecessaryPoints } from './getRelationPoints'
 import Marker from "./Marker.svelte";
 import Point from "./Point.svelte";

export let index: number;
export let relationPoints: IPoint[];
export let pickedTable: ITableOnDiagram | null;

let pointsVisible: boolean = false;
let moverVisible: boolean = false;
let activeLine: number | null = null;

const dispatch = createEventDispatcher();

const pointsVisibleToggle = (): void => {
  pointsVisible = !pointsVisible;
}

const moverVisibleToggle = () => {
  moverVisible = !moverVisible;
}
const setActiveLine = (ind) => {
   activeLine = ind;
}

const lineMoveStart = (ev: MouseEvent, moverPoint: IConnectorMoverPoint, index: number) => {
  updateRelationPoints(moverPoint, relationPoints, index);
}



const updateRelationPoints = (moverPoint: IConnectorMoverPoint, points: IPoint[], index: number) => {
		dispatch('update', { moverPoint, points, index });
}

const breakLine = ({ direction, rotatePoints }: IConnectorBreakerPoint): void => {
const { first, second, insertIndex } = rotatePoints;

let start = relationPoints.find(el => el.x  === first.x && el.y === first.y);
let end = relationPoints.find(el => el.x  === second.x && el.y === second.y);
  
if (!start || !end) {
  const stopPoint = Object.assign({}, !end ? second : first);

    if (!start) 
      relationPoints.splice((insertIndex + 1), 0, first);
    
    if (!end) 
      relationPoints.splice((insertIndex + 1), 0, second);

    if (direction === DirectionEnum.h) {
      relationPoints[insertIndex].x = relationPoints[insertIndex].x + 1; 
      relationPoints[insertIndex + 1].x = relationPoints[insertIndex + 1].x + 1; 
      relationPoints.splice((rotatePoints.insertIndex + 2), 0, stopPoint);
    }

    if (direction === DirectionEnum.v) {
      relationPoints[insertIndex].y = relationPoints[insertIndex].y - 1; 
      relationPoints[insertIndex + 1].y = relationPoints[insertIndex + 1].y - 1; 
      relationPoints.splice((rotatePoints.insertIndex + 2), 0, stopPoint);
    }
  }
}

</script>
    <polyline
      points={convertToString(relationPoints)}
      on:mousedown={() => {
          setActiveLine(index);
          pointsVisibleToggle();
          moverVisibleToggle();
      }}
    />
   {#if moverVisible && !pickedTable && activeLine === index}
      {#each getConnectorLineBreakPoints(relationPoints) as mover}
       <circle class='break' cy={mover.point.y} cx={mover.point.x} r='10'  on:click={ (e) => breakLine(mover)}></circle>
        <!-- <svg class='breaker'
          viewBox="0 0 292.445 292.445" 
          xmlns="http://www.w3.org/2000/svg" 
          width="20"  
          height="20"
          x={ mover.direction === DirectionEnum.v ? mover.point.x - 10 : mover.point.x + 10} 
          y={ mover.point.y - 10 }
          on:click={ (e) => breakLine(mover)}
        >

          <path  
            transform={ mover.direction === DirectionEnum.h ? "rotate(90)" : null }
            fill='red'
            fill-opacity='1'
            d="M243.428 0c-19.857 0-36.503 13.189-42.171 31.204h-53.125c-7.311 0-13.219 
            5.915-13.219 13.22l-.018 59.979c-18.005 5.669-31.186 22.332-31.186 42.181 0
             19.846 13.19 36.516 31.186 42.184v46.021l-43.706.024c-5.662-18.015-22.313-31.2-42.181-31.2-24.493
              0-44.42 19.924-44.42 44.423 0 24.487 19.921 44.411 44.42 44.411 19.867 0 36.519-13.187 42.181-31.188l56.949-.013c7.302
               0 13.217-5.932 13.217-13.229v-59.261c18.015-5.656 31.195-22.326 31.195-42.178 0-19.849-13.187-36.512-31.195-42.181l.013-46.75h39.89c5.668 18.002 22.325 
               31.186 42.171 31.186 24.506 0 44.43-19.924 44.43-44.414C287.857 19.927 267.934 0 243.428 0zM49.002 266c-9.908 0-17.969-8.058-17.969-17.954 0-9.907 
               8.061-17.99 17.969-17.99 9.911 0 17.972 8.083 17.972 17.99 0 9.896-8.061 17.954-17.972 17.954zm99.124-101.438c-9.911 0-17.972-8.064-17.972-17.973 0-9.911 8.062-17.966 17.972-17.966 9.908 0 17.967 8.062 17.967 17.966 0 9.908-8.059 17.973-17.967 17.973zm95.302-102.169c-9.901 0-17.966-8.062-17.966-17.96 0-9.908 8.064-17.976 17.966-17.976 9.914 0 17.984 8.067 17.984 17.976 0 9.899-8.07 17.96-17.984 17.96z"
          />
        </svg> -->
      {/each}
      {#each getConnectorMoverPoints(relationPoints) as mover}
          <svg class='mover'
            viewBox="0 0 512 512" 
            xmlns="http://www.w3.org/2000/svg" 
            width="30"  
            height="30"
            x={ mover.direction === DirectionEnum.v ? mover.point.x - 15 : mover.point.x + 15} 
            y={ mover.point.y - 15 }
            on:mousedown={ (e) => lineMoveStart(e, mover, index) }
          >
            <path  
              transform={ mover.direction === DirectionEnum.h ? "rotate(90)" : null }
              fill='grey'
              fill-opacity='1'
              d="M352 384h-48V128h48a16 16 0 0011-27L267 5c-6-7-16-7-22 0l-96 96c-5 4-6 11-4 17 3 6 9 10 15 10h48v256h-48a16 16 0 00-11 27l96 96c6 7 16 7 22 0l96-96a16 16 0 00-11-27z"
            />
          </svg>
      {/each}
      <Point 
        routePoints={relationPoints} 
        {pointsVisible} 
        linesBreakPoints={getConnectorLineBreakPoints(relationPoints)} 
      />
    {/if}

<style>
  .mover {
    overflow: visible;
    cursor: pointer;
  }
  /* .breaker {
    overflow: visible;
    cursor: pointer;
  } */

  .break {
        cursor: pointer;
        fill: #00abd6;
        fill-opacity: 0.1;
    }
  polyline {
    stroke: black;
    stroke-width: 0.5;
    fill: transparent;
  }
</style>
