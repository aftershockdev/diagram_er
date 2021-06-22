<script lang="ts">
  import type { IDiagram, IPoint, ITableOnDiagram } from "./diagram";
  import type { IDataModel } from "../Table/data-model";
  import { DirectionEnum } from "./diagram";
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
  $: pickedConnector = null;

  export const getInnerPoints = (): IPoint[][] =>
    relationToShow.filter(rel =>  rel.points !== undefined).map(_ => _.points)

  const pickTable = (table: ITableOnDiagram): any => 
    pickedTable = table;
  

  const moveTable = (ev?: MouseEvent): void => {
    if(!pickedTable) return;

    pickedTable.left = ev.offsetX - (pickedTable.width / 2);
    pickedTable.top = ev.offsetY - (pickedTable.height / 2);
    listOfTablesOnDiagram = listOfTablesOnDiagram;
  }

  const moveLine = (ev) => {
    if (!pickedConnector) return;
    const { index, moverPoint } = pickedConnector; 

    let start = relationPoints[index].find(el => el.x  === moverPoint.segmentStartPoint.x && el.y === moverPoint.segmentStartPoint.y);
    let end = relationPoints[index].find(el => el.x  === moverPoint.segmentEndPoint.x && el.y === moverPoint.segmentEndPoint.y);

    if (start && end) {
      if (moverPoint.direction === DirectionEnum.h) {
        moverPoint.segmentStartPoint.x = ev.offsetX;
        moverPoint.segmentEndPoint.x = ev.offsetX;
        start.x = ev.offsetX;
        end.x = ev.offsetX;
      }
  
      if (moverPoint.direction === DirectionEnum.v) {
        moverPoint.segmentStartPoint.y = ev.offsetY;
        moverPoint.segmentEndPoint.y = ev.offsetY;
        start.y = ev.offsetY;
        end.y = ev.offsetY;
      }
    }
     relationPoints[index] = removeUnnecessaryPoints(relationPoints[index]);
  }

  const updateRelationsOnDiagram = (event) => {
    const { points, index } = event.detail;
    pickedConnector = event.detail;
    relationToShow[index].points = removeUnnecessaryPoints(points);
    relationPoints[index] = removeUnnecessaryPoints(relationPoints[index]);
  }

  const stopTable = (): void => {
    pickedTable = null;
  }
  const stopLine = (): void => {
    pickedConnector = null;
  }

  const clickAway = (event): void => {
    console.log('x', event.offsetX, 'y', event.offsetY);
    pickedTable = null;
  }

</script>

  <div class="wrapper" 
     on:mousemove={(e) => {
      moveTable(e);
      moveLine(e);
     }}
     on:mouseup={() => {
       stopTable();
       stopLine();
     }} 
     on:click={(e) => clickAway(e)}>
    <svg width="100%" height="100%">
      {#each listOfTablesOnDiagram as tOnDiagram}
        <rect on:mousedown={pickTable(tOnDiagram)} x={tOnDiagram.left} y={tOnDiagram.top} width={tOnDiagram.width} height={tOnDiagram.height} fill='blue' opacity='0.5'/>
      {/each}
      {#each relationPoints as point, i }
        <Connector 
          index={i} 
          relationPoints={point} 
          {pickedTable} 
          on:update={(e) => updateRelationsOnDiagram(e)} />
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
