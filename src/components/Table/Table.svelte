<script lang="ts">
  import type { ITable } from "./data-model";
  import type { ITableOnDiagram } from "../Diagram/diagram";
  import { createEventDispatcher } from 'svelte';

  export let tables: ITable[];
  export let tablePos: ITableOnDiagram;

  const { columns } = tables.find(el => el.name === tablePos.name);

  const dispatch = createEventDispatcher();

  const getTable = () => dispatch('pick', tablePos);
  const stopTable = () => dispatch('stop');
</script>

<div
  class="table"
  style="
  left: {tablePos.left}px;
  top: {tablePos.top}px;
  width: {tablePos.width}px;
  height: {tablePos.height}px"
  on:mousedown={getTable}
  on:mouseup={stopTable}
>
   <p>{tablePos.name}</p>
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
