<script lang="ts">
  import type { IDataModel } from "../Table/data-model";
  import type { IDiagram, IPoint, ITableOnDiagram } from "./diagram";
  import { getRelationPoints } from "./getRelationPoints";
  import Table from "../Table/Table.svelte";
  import Line from "./Line.svelte";

  export let diagram: IDiagram;
  export let dataModel: IDataModel;

  $: relationToShow = diagram.relationToShow;
  $: tables = dataModel.tables;
  $: listOfTablesOnDiagram = diagram.tableOnDiagram;

  let pickedTable: ITableOnDiagram;
  $: relationPoints = getRelationPoints(diagram);

  export const getInnerPoints = (diagram: IDiagram): IPoint[][] =>
    relationToShow.filter(rel =>  rel.points !== undefined).map(_ => _.points)

  const pickTable = (table: ITableOnDiagram): any => {
    pickedTable = table;
  }

  const moveTable = (ev?: MouseEvent): void => {
    if(!pickedTable) return;

    pickedTable.left = ev.offsetX - (pickedTable.width / 2);
    pickedTable.top = ev.offsetY - (pickedTable.height / 2);
    listOfTablesOnDiagram = listOfTablesOnDiagram;
    relationPoints = relationPoints;
  }

  const stopTable = (): void => {
    pickedTable = null;
  }

</script>

<div class="wrapper" on:mousemove={moveTable} on:mouseup={stopTable}>
  <svg width="100%" height="100%">
    <Line {relationPoints} />
    {#each listOfTablesOnDiagram as tOnDiagram}
      <rect on:mousedown={pickTable(tOnDiagram)} x={tOnDiagram.left} y={tOnDiagram.top} width={tOnDiagram.width} height={tOnDiagram.height} fill='blue' opacity='0.5'/>
      <!-- <Table on:pick={pickTable(tOnDiagram)} {tables} {tOnDiagram} /> -->
    {/each}
  </svg>
</div>

<style>
  .wrapper {
    position: relative;
    height: 100vh;
    width: 100vw;
  }

</style>
