<script lang="ts">
  import type { IDataModel } from "../Table/data-model";
  import type { IDiagram, IPoint, ITableOnDiagram } from "./diagram";
  import { getRelationPoints, removeUnnecessaryPoints } from "./getRelationPoints";
  import Table from "../Table/Table.svelte";
  import Connector from "./Connector.svelte";

  export let diagram: IDiagram;
  export let dataModel: IDataModel;

  $: tables = dataModel.tables;
  $: relationToShow = diagram.relationToShow;
  $: relationPoints = getRelationPoints(diagram);
  $: listOfTablesOnDiagram = diagram.tableOnDiagram;
  
  $: pickedTable = null;

  export const getInnerPoints = (): IPoint[][] =>
    relationToShow.filter(rel =>  rel.points !== undefined).map(_ => _.points)

  const pickTable = (table: ITableOnDiagram): any => {
    pickedTable = table;
  }

  const moveTable = (ev?: MouseEvent): void => {
    if(!pickedTable) return;

    pickedTable.left = ev.offsetX - (pickedTable.width / 2);
    pickedTable.top = ev.offsetY - (pickedTable.height / 2);
    listOfTablesOnDiagram = listOfTablesOnDiagram;
  }

  const updateRelationsOnDiagram = (event) => {
      const { points, index } = event.detail;
        relationToShow[index].points = removeUnnecessaryPoints(points);
    
  }
  const stopTable = (): void => {
    pickedTable = null;
  }

  const clickAway = (event): void => {
    console.log('x', event.offsetX, 'y', event.offsetY);
    pickedTable = null;
  }
</script>

  <div class="wrapper" on:mousemove={moveTable} on:mouseup={stopTable} on:click={(e) => clickAway(e)}>
    <svg width="100%" height="100%">
      {#each listOfTablesOnDiagram as tOnDiagram}
        <rect on:mousedown={pickTable(tOnDiagram)} x={tOnDiagram.left} y={tOnDiagram.top} width={tOnDiagram.width} height={tOnDiagram.height} fill='blue' opacity='0.5'/>
      {/each}
      <Connector {relationPoints} {pickedTable} on:update={updateRelationsOnDiagram} />
    </svg>
  </div>

<style>
  .wrapper {
    position: relative;
    height: 100vh;
    width: 100vw;
  }

</style>
