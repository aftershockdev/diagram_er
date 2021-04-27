<script lang="ts">
import type { IRelation } from '../interfaces/data-model';
import type { IDiagram } from '../interfaces/diagram'

import Line from './Line.svelte'
import Table from './Table.svelte'

  export let diagram: IDiagram;
  export let relation: IRelation[];

  const { tableOnDiagram, relationOnDiagram } = diagram;

</script>


<div class="wrapper">
  <svg width="100%" height="100%">
    {#each relationOnDiagram as rel}
    <Line relation={rel} diagram={diagram}/>
    {/each}
  </svg>
    {#each tableOnDiagram as table}
      <Table tablePos={table}/>
    {/each}
</div>



<style>

.wrapper {
  margin-top: 50px;
  position: relative;
  height: 800px;
  background: rgba(0, 0, 0, 0.1);
}

</style>