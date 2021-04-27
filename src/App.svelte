<script lang="ts">
  import Diagram from './components/Diagram.svelte'
  import {dataModel, tablesOnDiagram} from './data/data'
</script>

<main>
  <Diagram tablePos={tablesOnDiagram} relationPos={dataModel.relations}/>
</main>

