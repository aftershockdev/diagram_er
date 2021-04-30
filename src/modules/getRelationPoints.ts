import { IDiagram, IPoint, IRelationToShow, IRelativePoint, ITableOnDiagram, SideEnum } from "../interfaces/diagram";
import { getPoint } from "./getPoint";

const getPointFromTable = (d: IDiagram, rel: IRelativePoint): IPoint => {
  const t = d.tableOnDiagram.find(_ => _.name === rel.name);
  return getPoint(t, rel);
};

const shift = 20;

const getNextpoint = (point: IPoint, rel: IRelativePoint): IPoint => {
  switch (rel.side) {
    case SideEnum.bottom:  
      return { x: point.x, y: point.y + shift};
    case SideEnum.top:  
      return { x: point.x, y: point.y - shift};
    case SideEnum.left:  
      return { x: point.x - shift, y: point.y};
    case SideEnum.right:  
      return { x: point.x + shift, y: point.y};
  }
};

const getInterimPoints = (start: IPoint, startSide: SideEnum, end: IPoint, endSide: SideEnum): IPoint[] => {
  const xDif = start.x - end.x;
  const yDif = start.y - end.y;

  const midX = start.x - xDif / 2;
  const midY = start.y - yDif / 2;
  if (startSide === SideEnum.bottom || endSide === SideEnum.bottom) {
    return [
      {x: midX, y: start.y},
      {x: midX, y: end.y}
    ]
  }
  return [
    {x: start.x, y: midY},
    {x: end.x, y: midY}
  ]
};

export const getRelationPoints = (
  diagram: IDiagram,
): IPoint[][] => {
  const { relationToShow } = diagram;
  return relationToShow.map((relation) => {
    const { from, to } = relation;
    const startPoint = getPointFromTable(diagram, from);
    const secondPoint = getNextpoint(startPoint, from);
    const endPoint = getPointFromTable(diagram, to);
    const preEndPoint = getNextpoint(endPoint, to);

    const points = [
      startPoint,
      secondPoint,
      ...getInterimPoints(secondPoint, from.side, preEndPoint, to.side),
      preEndPoint,
      endPoint
    ];
    return points;
  });
};
