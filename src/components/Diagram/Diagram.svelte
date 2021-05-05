<script lang="ts">
  import type { IDataModel } from "../Table/data-model";
  import type { IDiagram, IPoint } from "./diagram";
  import { getRelationPoints } from "./getRelationPoints";
  import Table from "../Table/Table.svelte";
  import Marker from "./Marker.svelte";

  export let diagram: IDiagram;
  export let dataModel: IDataModel;

  const { tables } = dataModel;
  const { tableOnDiagram } = diagram;

  const relationPoints = getRelationPoints(diagram);

  export const getInnerPoints = (diagram: IDiagram): IPoint[] =>
    diagram.relationToShow.filter(rel =>  rel.points !== undefined)
    .map(_ => _.points).flat()

  export const convertToString = (p: IPoint[]): string =>
    p.reduce((curV, _) => {
      const v = `${_.x} ${_.y}`;
      return curV === "" ? v : `${curV}, ${v}`;
    }, "");

  let pickedPoint: IPoint;

  const pickPoint = (point: IPoint): any => {
    pickedPoint = point
  }
  const movePoint = (ev?: MouseEvent): void => {
    if(!pickedPoint) return;
    relationPoints.forEach((_, index) => _.forEach((el, i) => {
      if(el.x === pickedPoint.x && el.y === pickedPoint.y){
        relationPoints[index][i].x = ev.offsetX
        relationPoints[index][i].y = ev.offsetY
      }
    }))
  }
  let m = { x: 0, y: 0 };
</script>

<div class="wrapper" on:mousemove={(e) => (m = { x: e.clientX, y: e.clientY })}>
  <div class="p">The mouse position is {m.x} x {m.y}</div>
  <svg width="100%" height="100%" on:mousemove={movePoint}>
    {#each relationPoints as points}
      <Marker />
      <polyline
        points={convertToString(points)}
        marker-start="url(#fromOne)"
        marker-end="url(#toMany)"
      />
    {/each}
    {#each getInnerPoints(diagram) as point}
      <circle on:click={pickPoint(point)} cy={point.y} cx={point.x} r='6'></circle>
    {/each}
  </svg>
  {#each tableOnDiagram as tablePos}
    <Table {tables} {tablePos} />
  {/each}
</div>

<style>
  .wrapper {
    position: relative;
    height: 500px;
    width: 500px;
    background: rgba(0, 0, 0, 0.1);
  }
  .p {
    position: absolute;
  }
  circle {
    cursor: pointer;
  }
  polyline {
    stroke: red;
    stroke-width: 1;
    fill: transparent;
  }
</style>
