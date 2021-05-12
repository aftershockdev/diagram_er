<script lang="ts">
  import type { IDataModel } from "../Table/data-model";
  import type { IDiagram, IPoint, ITableOnDiagram } from "./diagram";
  import { getRelationPoints } from "./getRelationPoints";
  import { convertToString } from './convertToStr'
  import Table from "../Table/Table.svelte";
  import Marker from "./Marker.svelte";

  export let diagram: IDiagram;
  export let dataModel: IDataModel;

  const { tables } = dataModel;
  const { tableOnDiagram } = diagram;

  let relationPoints = getRelationPoints(diagram);

  export const getInnerPoints = (diagram: IDiagram): IPoint[][] =>
    diagram.relationToShow.filter(rel =>  rel.points !== undefined)
    .map(_ => _.points)

  let pickedTable: ITableOnDiagram;


  const pickTable = (table: ITableOnDiagram): any => {
    pickedTable = table;
  }

  const moveTable = (ev?: MouseEvent): void => {
    if(!pickedTable) return;

   tableOnDiagram.forEach((_, i)=> {
     if(_.left === pickedTable.left && _.top === pickedTable.top){
      diagram.tableOnDiagram[i].left = ev.offsetX;
      diagram.tableOnDiagram[i].top = ev.offsetY;
      relationPoints = getRelationPoints(diagram);
     }
   })
  }

  const stopTable = (): void => {
    pickedTable = null;
  }

  let m = { x: 0, y: 0 };
</script>

<div class="wrapper" on:mousemove={(e) => (m = { x: e.clientX, y: e.clientY })}>
  <div class="p">The mouse position is {m.x} x {m.y}</div>
  <svg width="100%" height="100%" on:mousemove={moveTable} on:mouseup={stopTable}>
    {#each diagram.tableOnDiagram as tablePos}
      <rect on:mousedown={pickTable(tablePos)} x={tablePos.left} y={tablePos.top} width={tablePos.width} height={tablePos.height} fill='blue' opacity='0.5'/>
    <!-- <Table on:mousedown={pickTable(tablePos)} {tables} {tablePos} /> -->
    {/each}
    {#each relationPoints as points}
      <Marker />
      <polyline
        points={convertToString(points)}
        marker-start="url(#fromOne)"
        marker-end="url(#toMany)"
      />
    {/each}
    {#each relationPoints.flat() as point}
      <circle cy={point.y} cx={point.x} r='2.5'></circle>
    {/each}

  </svg>
</div>

<style>
  .wrapper {
    position: relative;
    height: 100vh;
    width: 100vw;
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
