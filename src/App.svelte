<script lang="ts">
  import { data, tablesOnDiagram, tablesOnDiagram_2, tablesOnDiagram_3, tablesOnDiagram_4, tablesOnDiagram_5 } from './data/data'
  import Diagram from './components/Diagram.svelte'
</script>

<main>
  <Diagram tables={data} tablesPosition={tablesOnDiagram}/>
</main>

