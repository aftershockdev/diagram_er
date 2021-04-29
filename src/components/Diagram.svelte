<script lang="ts">
  import type { IDataModel } from "../interfaces/data-model";
  import type { IDiagram } from "../interfaces/diagram";
  import { getCoordinates } from "../modules/getCoordinates";

  import Line from "./Line.svelte";
  import Table from "./Table.svelte";

  export let diagram: IDiagram;
  export let dataModel: IDataModel;

  const { tables } = dataModel;
  const { tableOnDiagram, relationToShow } = diagram;

  const coordinates = getCoordinates(tableOnDiagram, relationToShow);
</script>

<div class="wrapper">
  <svg width="100%" height="100%">
    {#each coordinates as point}
      <Line point={point} />
    {/each}
  </svg>
  {#each tableOnDiagram as tablePos}
    <Table {tables} tablePos={tablePos} />
  {/each}
</div>

<style>
  .wrapper {
    position: relative;
    height: 70vh;
    background: rgba(0, 0, 0, 0.1);
  }
</style>
