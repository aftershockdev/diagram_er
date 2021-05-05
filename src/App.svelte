<script lang="ts">
  import Diagram from './components/Diagram/Diagram.svelte';
  import { diagram, diagram_1, diagram_2, diagram_3, diagram_4, diagram_5, dataModel } from './data/data';
</script>

<main>
  <Diagram diagram={diagram} dataModel={dataModel}/>
  <Diagram diagram={diagram_1} dataModel={dataModel}/>
  <!-- <Diagram diagram={diagram_2} dataModel={dataModel}/>
  <Diagram diagram={diagram_3} dataModel={dataModel}/>
  <Diagram diagram={diagram_4} dataModel={dataModel}/>
  <Diagram diagram={diagram_5} dataModel={dataModel}/> -->
</main>

<style>
  main {
    display: flex;
    flex-wrap: wrap;
  }
</style>