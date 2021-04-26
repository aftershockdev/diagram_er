export interface IDataModel {
  tableName: string;
  tableColumns: IColumnModel[];
}

export interface IColumnModel {
  colName: string;
  dataType: string | number;
}

export interface ITablePosition {
  [key: string]: {
    left: number;
    top: number;
    width: number;
    height: number;
  };
}
