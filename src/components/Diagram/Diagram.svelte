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
    <marker id="fromOne" markerWidth="16" markerHeight="16" refX="-5" refY="6" orient="auto">
      <rect x="0" y="-8" width="1" height="20" />
      <rect x="4" y="-8" width="1" height="20" />
    </marker>

    <marker id="toMany" markerWidth="16" markerHeight="16" refX="8" refY="0" orient="auto" viewBox="-8 -8 16 16">
      <rect x="0" y="-6" width="1" height="12" />
      <path d="M 0,0 L 8,6 M 0,0 L 8,-6" stroke="red" stroke-width="1" />
    </marker>

    {#each relationPoints as points}
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
    height: 100vh;
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
