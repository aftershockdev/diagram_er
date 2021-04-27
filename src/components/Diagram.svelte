<script lang="ts">
  import type {ITableOnDiagram, IRelationOnDiagram } from '../interfaces/diagram'
  export let tablePos: ITableOnDiagram[];
  export let relationPos: IRelationOnDiagram[];

  console.log(tablePos, relationPos)
//   function getTable(model: IDataModel, name: string): ITable {
//   return model.tables.find((el) => el.name === name);
// }

// function getRelations(
//   model: IDataModel,
//   diagram: IDiagram,
//   name: string
// ): IRelationOnDiagram[] {
//   return [];
// }

// function getRelativePosition(
//   relations: IRelation,
//   position: IRelationOnDiagram
// ): IRelation[] {
//   return [];
// }

</script>