export interface IDataModel {
  tables: ITable[];
  relations: IRelation[];
}

export interface ITable {
  name: string;
  columns: IColumn[];
}

export interface IColumn {
  name: string;
  type: string;
}

export interface IRelation {
  name: string;
  from: string;
  to: string;
}
