<script lang="ts">
import type {  IDiagram, ITableOnDiagram } from "../interfaces/diagram";
import { dataModel } from '../data/data'
import { getTable } from '../modules/getTable'

export let tablePos: ITableOnDiagram;

const { columns } = getTable(dataModel, tablePos.name)

</script>


<table class='table' style="
left: {tablePos.left}px;
top: {tablePos.top}px;
width: {tablePos.width}px;
height: {tablePos.height}px">

  <caption>{tablePos.name}</caption>
  <thead>
    <th>'№'</th>
    <th>Name</th>
    <th>Type</th>
  </thead>
  {#each columns as col, i}
  <tr>
    <td>{i+1}</td>
    <td>{col.name}</td>
    <td>{col.type}</td>
  </tr>
  {/each}
</table>


<style>
.table {
  border-collapse: collapse;
  position: absolute;
  background: rgba(0, 0, 0, .3);
  cursor: pointer;
}
.table:active {
  background: #a0d2e6;
}
th,
td,
caption {
  border: 1px solid lightgray;
  opacity: 0.5;
}
caption {
  font-weight: bold;
  border: 1px solid rgb(103, 1, 204);
  background-color: rgb(103, 1, 204);
  color: #fff;
}
</style>