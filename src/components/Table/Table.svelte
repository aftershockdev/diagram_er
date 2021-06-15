<script lang="ts">
  import type { ITable } from "./data-model";
  import type { ITableOnDiagram } from "../Diagram/diagram";
  import { createEventDispatcher } from 'svelte';

  export let tables: ITable[];
  export let tOnDiagram: ITableOnDiagram;

  const { columns } = tables.find(el => el.name === tOnDiagram.name);

  const dispatch = createEventDispatcher();

  const getTable = () => dispatch('pick', tOnDiagram);
  const stopTable = () => dispatch('stop');
</script>

<div
  class="table"
  style="
  left: {tOnDiagram.left}px;
  top: {tOnDiagram.top}px;
  width: {tOnDiagram.width}px;
  height: {tOnDiagram.height}px"
  on:mousedown={getTable}
  on:mouseup={stopTable}
>
   <p>{tOnDiagram.name}</p>
  <!-- <div class="t-header">
    <p>'№'</p>
    <p>Name</p>
    <p>Type</p>
  </div>
  {#each columns as col, i}
    <div class="t-body">
      <p>{i + 1}</p>
      <p>{col.name}</p>
      <p>{col.type}</p>
    </div>
  {/each}  -->
</div>

<style>
  .table {
    position: absolute;
    background: black;
    opacity: 0.5;
    cursor: pointer;
  }
  .table p {
    color: rgb(255, 255, 255);
    font-size: 14px;
    font-weight: 500;
    margin: 0;
    padding: 0;
  }

</style>
