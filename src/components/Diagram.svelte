<script lang="ts">
  import type { IDataModel } from "../interfaces/data-model";
  import type { IDiagram } from "../interfaces/diagram";
  import { getRelationPoints } from "../modules/getRelationPoints";

  import Line from "./Line.svelte";
  import Table from "./Table.svelte";

  let m = { x: 0, y: 0 };

  export let diagram: IDiagram;
  export let dataModel: IDataModel;

  const { tables } = dataModel;
  const { tableOnDiagram } = diagram;

  const relationPoints = getRelationPoints(diagram);
</script>

<div class="wrapper" on:mousemove="{e => m = { x: e.clientX, y: e.clientY }}">
  <div class="p">The mouse position is {m.x} x {m.y}</div>
  <svg width="100%" height="100%">
    {#each relationPoints as points}
      <Line {points} />
    {/each}
  </svg>
  {#each tableOnDiagram as tablePos}
    <Table {tables} tablePos={tablePos} />
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
</style>
