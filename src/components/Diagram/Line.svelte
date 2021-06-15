
<script lang="ts">
 import type { IPoint } from './diagram';
 import { convertToString } from './convertToStr'
 import { makeP } from "./getPoint";
 import Marker from "./Marker.svelte";
 import Point from "./Point.svelte";

export let relationPoints: IPoint[][];

let routePoints: IPoint[];
let pointsVisible: boolean = false;
let hoverPoints: IPoint[];
const pointsVisibleToggle = (): void => {
  pointsVisible = !pointsVisible;
}

export const pickRelationPoints = (p: IPoint[]): any => {
   routePoints = p;
   pointsVisibleToggle();
   hoverPoints = reduceMiddleHoverPoints(p)
 }

 export const reduceMiddleHoverPoints = (p: IPoint[]): IPoint[] => {
    if (p.length < 2)
      return p;

    const hoverPoints: IPoint[] = [];

    for (let i = 0; i < p.length; i++) {
      const cur = p[i];
      const next = p[i + 1];
     
      if (i !== p.length - 1) { 
          if (cur.x === next.x) {
              const yDif = cur.y - next.y
              const midY = cur.y - yDif / 2
              hoverPoints.push(makeP(cur.x, midY));
          }
          if (cur.y === next.y) {
              const xDif = cur.x - next.x
              const midX = cur.x - xDif / 2
              hoverPoints.push(makeP(midX, cur.y));
          }
      }
    }

    return hoverPoints
 }

 export const movePoint = (ev: MouseEvent): void => {
     routePoints = routePoints;
 }

 export const upPoint = (): void => {
     relationPoints = [];
 }

</script>

{#each relationPoints as points}
    <Marker />
    <polyline
     on:mousedown={pickRelationPoints(points)}
     points={convertToString(points)}
     marker-start="url(#fromOne)"
     marker-end="url(#toMany)"
   />
{/each}

 <Point {routePoints} {pointsVisible} {hoverPoints} />

<style>
  polyline {
    stroke: black;
    stroke-width: 0.2;
    fill: transparent;
    cursor: move;
  }
</style>



