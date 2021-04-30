export enum SideEnum {
  left = "left",
  right = "right",
  top = "top",
  bottom = "bottom",
}

export interface IDiagram {
  tableOnDiagram: ITableOnDiagram[];
  relationToShow: IRelationToShow[];
}

export interface IRelativePoint {
  name: string;
  side: SideEnum;
  shift: number;
}

export interface IPoint {
  x: number;
  y: number;
}
export interface IRelationToShow {
  from: IRelativePoint;
  to: IRelativePoint;
}
export interface ITableOnDiagram {
  name: string;
  left: number;
  top: number;
  width: number;
  height: number;
}
