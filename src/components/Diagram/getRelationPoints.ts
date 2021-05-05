import type { IDiagram, IPoint, IRelativePoint } from "./diagram";
import { getPoint } from "./getPoint";
import { getNextpoint } from "./getNextpoint";
import { getInterimPoints } from "./getInterimPoints";

const getPointFromTable = (d: IDiagram, rel: IRelativePoint): IPoint => {
  const t = d.tableOnDiagram.find((_) => _.name === rel.name);
  return getPoint(t, rel);
};

export const getRelationPoints = (diagram: IDiagram): IPoint[][] => {
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
      endPoint,
    ];
    return points;
  });
};
