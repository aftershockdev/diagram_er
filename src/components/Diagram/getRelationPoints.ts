import type { IDiagram, IPoint, IRelativePoint } from "./diagram";
import { getPoint } from "./getPoint";
import { getNextPoint } from './getNextPoint';
import { getInterimPoints } from './getInterimPoints';

const getPointFromTable = (d: IDiagram, rel: IRelativePoint): IPoint => {
  const t = d.tableOnDiagram.find((_) => _.name === rel.name);
  return getPoint(t, rel);
};

export const getRelationPoints = (diagram: IDiagram): IPoint[][] => {
  const { relationToShow } = diagram;
  return relationToShow.map(({from, to, points}) => {
    const startPoint = getPointFromTable(diagram, from);
    const secondPoint = getNextPoint(startPoint, from);
    const endPoint = getPointFromTable(diagram, to);
    const preEndPoint = getNextPoint(endPoint, to);
    const interimPoints = points ? points : getInterimPoints(secondPoint, from.side, preEndPoint, to.side);

    return [
      startPoint,
      secondPoint,
      ...interimPoints,
      preEndPoint,
      endPoint,
    ];
  });
};
