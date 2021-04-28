<script lang="ts">
  import type { IDataModel } from "../interfaces/data-model";
  import type { IDiagram } from "../interfaces/diagram";

  import Line from "./Line.svelte";
  import Table from "./Table.svelte";

  export let diagram: IDiagram;
  export let dataModel: IDataModel;
  let m = { x: 0, y: 0 };

  const { tableOnDiagram, relationOnDiagram } = diagram;
</script>

<div class="wrapper" on:mousemove={(e) => (m = { x: e.clientX, y: e.clientY })}>
  <div class="watcher">
    The mouse position is {m.x} x {m.y}
  </div>
  <svg width="100%" height="100%">
    {#each [relationOnDiagram[0]] as rel}
      <Line {dataModel} relation={rel} {diagram} />
    {/each}
  </svg>
  {#each tableOnDiagram as table}
    <Table {dataModel} tablePos={table} />
  {/each}
</div>

<style>
  .wrapper {
    position: relative;
    height: 100vh;
    background: rgba(0, 0, 0, 0.1);
  }
  .watcher {
    position: absolute;
    top: 15px;
    left: 15px;
  }
</style>
