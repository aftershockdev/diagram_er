<script lang="ts">
  import type { IDiagram, IRelationOnDiagram } from '../interfaces/diagram'
  import { getPoint } from '../modules/getPoint';
  import {dataModel} from '../data/data'

  export let relation: IRelationOnDiagram;
  export let diagram: IDiagram;

  const startPoint = getPoint(dataModel, diagram, relation.name, 'from')
  const endPoint = getPoint(dataModel, diagram, relation.name, 'to')

</script>

<line x1={startPoint.x} y1={startPoint.y} x2={endPoint.x} y2={endPoint.y} stroke="black" />
