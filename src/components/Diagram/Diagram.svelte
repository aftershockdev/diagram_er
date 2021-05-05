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

  export const convertToString = (p: IPoint[]): string =>
    p.reduce((curV, _) => {
      const v = `${_.x} ${_.y}`;
      return curV === "" ? v : `${curV}, ${v}`;
    }, "");

  let m = { x: 0, y: 0 };
</script>

<div class="wrapper" on:mousemove={(e) => (m = { x: e.clientX, y: e.clientY })}>
  <div class="p">The mouse position is {m.x} x {m.y}</div>
  <svg width="100%" height="100%">
    {#each relationPoints as points}
      <Marker />
      <polyline
        points={convertToString(points)}
        marker-start="url(#fromOne)"
        marker-end="url(#toMany)"
      />
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
  polyline {
    stroke: red;
    stroke-width: 1;
    fill: transparent;
  }
  marker {
    fill: red;
  }
</style>
