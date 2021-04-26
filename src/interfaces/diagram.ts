export interface IDiagram {
  tablePosition: ITablePosition[];
  relationPosition: IRelationOnDiagram[];
}

export interface ITablePosition {
  name: string;
  left: number;
  top: number;
  width: number;
  height: number;
}

export interface IRelationOnDiagram {
  name: string;
}

export interface IDataModel {
  table: ITable[];
  relations: IRelation[];
}

export interface IRelation {
  name: string;
  from: string;
  to: string;
}

export interface ITable {
  name: string;
  columns: IColumn[];
}

export interface IColumn {
  name: string;
  type: string;
}

function getTable(model: IDataModel, name: string): ITable {
  return model.table.find((el) => el.name === name);
}

function getRelations(
  model: IDataModel,
  diagram: IDiagram,
  name: string
): IRelationOnDiagram[] {
  return [];
}

function getRelativePosition(
  relations: IRelation,
  position: IRelationOnDiagram
): IRelation[] {
  return [];
}
