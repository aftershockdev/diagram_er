export interface IDataModel {
  tableName: string;
  tableColumns: IColumnModel[];
}

export interface IColumnModel {
  colName: string;
  colType: string;
}

export interface ITablePosition {
  [key: string]: {
    left: number;
    top: number;
    width: number;
    height: number;
  };
}
