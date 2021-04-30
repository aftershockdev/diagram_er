<script lang="ts">
  import Diagram from './components/Diagram/Diagram.svelte';
  import { diagram, diagram_1, diagram_2, dataModel } from './data/data';
</script>

<main>
  <Diagram diagram={diagram} dataModel={dataModel}/>
  <Diagram diagram={diagram_1} dataModel={dataModel}/>
  <Diagram diagram={diagram_2} dataModel={dataModel}/>
</main>
