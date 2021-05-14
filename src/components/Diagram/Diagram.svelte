<script lang="ts">
  import type { IDataModel } from "../Table/data-model";
  import type { IDiagram, IPoint, ITableOnDiagram } from "./diagram";
  import  { DirectionEnum } from "./diagram";
  import { getRelationPoints } from "./getRelationPoints";
  import { convertToString } from './convertToStr'
  import Table from "../Table/Table.svelte";
  import Marker from "./Marker.svelte";
  import { makeP } from "./getPoint";

  export let diagram: IDiagram;
  export let dataModel: IDataModel;

  $: relationToShow = diagram.relationToShow;
  $: tables = dataModel.tables;
  $: listOfTablesOnDiagram = diagram.tableOnDiagram;

  let pickedTable: ITableOnDiagram;
  let relationPoints = getRelationPoints(diagram);

  let hSegmentsIndx: number[] = [];
  let vSegmentsIndx: number[] = [];

  let lineRoute: IPoint[];

  export const getInnerPoints = (diagram: IDiagram): IPoint[][] =>
    relationToShow.filter(rel =>  rel.points !== undefined).map(_ => _.points)

  export const updatePoint = (indexs: number[],  dir: DirectionEnum, ev: MouseEvent): void => {
    let v: number;

     relationPoints.find((_, index) => {
       if (_ === lineRoute) {
         v = index;
         return true;
       }
    }).forEach((p, i) => {
      indexs.forEach((ind) => {
            if (ind === i) {
              switch (dir) {
                case DirectionEnum.h:
                // if (ind <= 2 || ind >= segment.length - 2) {
                //   const r = 950 + 50
                //   const l = 950 - 50
                                  
                //   if(relationPoints[v][i].x >= r) {
                //     return relationPoints[v][i].x = ev.offsetX 
                //   }
                //   if(relationPoints[v][i].x <= l) {
                //     return relationPoints[v][i].x = ev.offsetX 
                //   }
                //   // return
                // }
                  return relationPoints[v][i].x = ev.offsetX
                case DirectionEnum.v: 
                 return relationPoints[v][i].y = ev.offsetY
              }
            }
         })
            
     })
  }

  const pickTable = (table: ITableOnDiagram): any => {
    pickedTable = table;
  }

  const moveTable = (ev?: MouseEvent): void => {
    if(!pickedTable) return;

    pickedTable.left = ev.offsetX;
    pickedTable.top = ev.offsetY;
    listOfTablesOnDiagram = listOfTablesOnDiagram;
    relationPoints = getRelationPoints(diagram);
  }

  const stopTable = (): void => {
    pickedTable = null;
  }

  const pickLine = (points: IPoint[], ev?: MouseEvent): any => {
    lineRoute = points;
    const p = makeP(ev.offsetX, ev.offsetY);
    const hor = points.find(_ => _.x === p.x || _.x === p.x - 1 || _.x === p.x + 1)
    const vert = points.find(_ => _.y === p.y || _.y === p.y - 1 || _.y === p.y + 1)

    points.forEach((_, i) => {
      if (hor) {
        if (_.x === hor.x) {
          hSegmentsIndx.push(i)
        }
      }
      if(vert) {
        if (_.y === vert.y) { 
          vSegmentsIndx.push(i)
        }
      }
    })
  }

  const moveLine = (ev: MouseEvent): void => {
    if(!lineRoute)
     return

    if (hSegmentsIndx.length)
      updatePoint(hSegmentsIndx, DirectionEnum.h, ev)

    if (vSegmentsIndx.length)
      updatePoint(vSegmentsIndx, DirectionEnum.v, ev)
  }

  const stopLine = (): any => {
    lineRoute = null
    if (hSegmentsIndx.length) 
      hSegmentsIndx = []
    
    if (vSegmentsIndx.length)
      vSegmentsIndx = []
  }

</script>

<div class="wrapper" on:mousemove={moveTable} on:mouseup={stopTable}>
  <svg width="100%" height="100%" on:mousemove={moveLine}  on:mouseup={stopLine}>
    {#each relationPoints.flat() as point}
      <circle cy={point.y} cx={point.x} r='2.5'></circle>
    {/each}
    {#each relationPoints as points}
      <Marker />
    <polyline
      on:mousedown={(e) => pickLine(points, e)}
      points={convertToString(points)}
      marker-start="url(#fromOne)"
      marker-end="url(#toMany)"
    />
    {/each}
    {#each listOfTablesOnDiagram as tOnDiagram}
      <rect on:mousedown={pickTable(tOnDiagram)} x={tOnDiagram.left} y={tOnDiagram.top} width={tOnDiagram.width} height={tOnDiagram.height} fill='blue' opacity='0.5'/>
      <!-- <Table on:pick={pickTable(tablePos)} {tables} {tablePos} /> -->
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
  circle {
    cursor: pointer;
  }
  polyline {
    stroke: red;
    stroke-width: 2.5;
    fill: transparent;
    cursor: move;
  }
</style>
