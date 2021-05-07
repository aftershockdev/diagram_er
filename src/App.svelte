<script lang="ts">
  import Diagram from './components/Diagram/Diagram.svelte';
  import { diagram, diagram_1, diagram_2, diagram_3, diagram_4, diagram_5, dataModel, diagram_6, diagram_7, simple_diagram, simple_diagram_1, simple_diagram_2 } from './data/data';
</script>

<main>
  <Diagram diagram={simple_diagram} dataModel={dataModel}/>
  <!-- <Diagram diagram={simple_diagram_1} dataModel={dataModel}/> -->
  <!-- <Diagram diagram={simple_diagram_2} dataModel={dataModel}/> -->
   <!-- <Diagram diagram={diagram} dataModel={dataModel}/> -->
  <!-- <Diagram diagram={diagram_2} dataModel={dataModel}/>
  <Diagram diagram={diagram_3} dataModel={dataModel}/>
  <Diagram diagram={diagram_4} dataModel={dataModel}/>
  <Diagram diagram={diagram_5} dataModel={dataModel}/>
  <Diagram diagram={diagram_6} dataModel={dataModel}/>
  <Diagram diagram={diagram_7} dataModel={dataModel}/> -->
</main>

<style>
  main {
    display: flex;
    flex-wrap: wrap;
  }
</style>