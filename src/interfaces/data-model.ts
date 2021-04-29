export interface IDataModel {
  tables: ITable[];
}

export interface ITable {
  name: string;
  columns: IColumn[];
}

export interface IColumn {
  name: string;
  type: string;
}
