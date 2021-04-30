<script lang="ts">
  import type { IDataModel } from "../Table/data-model";
  import type { IDiagram, IPoint } from "./diagram";
  import { getRelationPoints } from "./getRelationPoints";
  import Table from "../Table/Table.svelte";

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
    <defs>
      <marker
        id="Line"
        markerWidth="4"
        markerHeight="12"
        refX="10"
        refY="0"
        viewBox="-2 -6 4 12"
        markerUnits="userSpaceOnUse"
        orient="auto"
      >
        <rect x="-1" y="-5" width="2" height="10" />
      </marker>
    </defs>
    {#each relationPoints as points}
      <polyline points={convertToString(points)} marker-end="url(#Line)" />
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
