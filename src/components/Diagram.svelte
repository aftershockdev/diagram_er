<script lang="ts">
  import Table from './Table.svelte';
  import type { IDataModel, ITablePosition } from '../interfaces/diagram';
  export let data: IDataModel[];
  export let tablesPosition: ITablePosition;

</script>

<div class="diagram">
  {#each data as list}
    <Table data={list} position={tablesPosition}/>
  {/each}
</div>


<style>
.diagram {
  height: 800px;
  margin-bottom: 10px;
  position: relative;
  background: rgba(0, 0, 0, .1);
}
.diagram:active {
  background: #fbfafa;
}
</style>
