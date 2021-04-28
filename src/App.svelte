<script lang="ts">
  import Diagram from './components/Diagram.svelte';
  import { diagram, dataModel } from './data/data';
</script>

<main>
  <Diagram diagram={diagram} dataModel={dataModel}/>
</main>

