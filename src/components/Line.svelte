<script lang="ts">
  import type { IDataModel } from "../interfaces/data-model";
  import type { IDiagram, IRelationOnDiagram } from "../interfaces/diagram";
  import { getRelativePoint } from "../modules/getRelativePoint";

  export let dataModel: IDataModel;
  export let relation: IRelationOnDiagram;
  export let diagram: IDiagram;

  const points = getRelativePoint(dataModel, diagram, relation.name);

</script>

<polyline
  points={points}
  style="stroke:red;stroke-width:4; fill:transparent;"
/>

<!-- <polyline points="480 390, 480 260, 880 260, 880 400, 860 400" style="stroke:red;stroke-width:4; fill:transparent;" />
<polyline points="860 400, 950 400, 950 500, 1040 500" style="stroke:red;stroke-width:4; fill:transparent;" />
<polyline points="1200 400, 1200 360, 1400 360, 1400 650, 750 650 ,750 510" style="stroke:red;stroke-width:4; fill:transparent;" /> -->
<style>
</style>
