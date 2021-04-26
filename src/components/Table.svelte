<script lang='ts'>
import type { IDataModel, ITablePosition} from '../interfaces/diagram';

export let data: IDataModel;
export let position: ITablePosition;
export let onDown;

let movingTable: HTMLElement;

const tablePosition = position[data.tableName]

</script>

<table class="table" style="
  left:{tablePosition.left}px;
  top:{tablePosition.top}px;
  width:{tablePosition.width}px;
  height: {tablePosition.height}px"
  bind:this={movingTable}
  on:mousedown={onDown(event, movingTable, data.tableName)}
>
  <caption>{data.tableName}</caption>
    <thead>
      <th>'№'</th>
      <th>Name</th>
      <th>Type</th>
    </thead>
    <tbody>
      {#each data.tableColumns as el, i}
        <tr>
          <td>{i+1}</td>
          <td>{el.colName}</td>
          <td>{el.colType}</td>
        </tr>
      {/each}
    </tbody>
</table>

<style>
.table {
  border-collapse: collapse;
  position: absolute;
  background: rgba(0, 0, 0, .3);
  cursor: pointer;
}
.table:active {
  background: #c4ffb1;
}

th,
td,
caption {
  border: 1px solid lightgray;
  padding: 5px 10px;
}
caption {
  font-weight: bold;
  border: 1px solid #ff3e00;
  background-color: #ff3e00;
  color: #fff;
}
</style>
