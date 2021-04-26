<script lang="ts">
  import { data, tablesOnDiagram, tablesOnDiagram_2, tablesOnDiagram_3, tablesOnDiagram_4, tablesOnDiagram_5 } from './data/data'
  import Diagram from './components/Diagram.svelte'
</script>

<main>
  <Diagram data={data} tablesPosition={tablesOnDiagram}/>
  <Diagram data={data} tablesPosition={tablesOnDiagram_2}/>
  <Diagram data={data} tablesPosition={tablesOnDiagram_3}/>
  <Diagram data={data} tablesPosition={tablesOnDiagram_4}/>
  <Diagram data={data} tablesPosition={tablesOnDiagram_5}/>
</main>

