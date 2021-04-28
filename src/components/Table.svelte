<script lang="ts">
  import type { IDataModel } from "../interfaces/data-model";

  import type { ITableOnDiagram } from "../interfaces/diagram";
  import { getTable } from "../modules/getTable";

  export let dataModel: IDataModel;
  export let tablePos: ITableOnDiagram;

  const { columns } = getTable(dataModel, tablePos.name);
</script>

<div
  class="table"
  style="
  left: {tablePos.left}px;
  top: {tablePos.top}px;
  width: {tablePos.width}px;
  height: {tablePos.height}px"
>
  <p>{tablePos.name}</p>
  <div class="t-header">
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
  {/each}
</div>

<style>
  .table {
    position: absolute;
    background: steelblue;
    opacity: 0.5;
    background: rgba(0, 0, 0, 0.1);
    cursor: pointer;
    height: 100%;
    width: 100%;
  }
  .table p {
    margin: 0;
    padding: 0;
  }
  .t-header {
    font-weight: bold;
    border: 1px solid rgb(103, 1, 204);
    background-color: rgb(103, 1, 204);
    color: #fff;
    display: flex;
    justify-content: space-between;
    padding: 0px 5px;
    align-items: center;
  }
  .t-body {
    display: grid;
    grid-template-columns: 40px 100px 1fr;
    grid-template-rows: 30px;
  }
</style>
