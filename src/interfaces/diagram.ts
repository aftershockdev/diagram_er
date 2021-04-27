export enum SideEnum {
  left = "left",
  right = "right",
  top = "top",
  bottom = "bottom",
}

export interface IDiagram {
  tablePosition: ITableOnDiagram[];
  relationPosition: IRelationOnDiagram[];
}

export interface ITableOnDiagram {
  name: string;
  left: number;
  top: number;
  width: number;
  height: number;
}

export interface IRelativePoint {
  side: SideEnum;
  shift: number;
}

export interface IRelationOnDiagram {
  name: string;
  from: IRelativePoint;
  to: IRelativePoint;
}

export interface IDataModel {
  tables: ITable[];
  relations: IRelationOnDiagram[];
}

export interface ITable {
  name: string;
  columns: IColumn[];
}

export interface IColumn {
  name: string;
  type: string;
}
