import type { IDiagram, IPoint, IRelativePoint, BendDirection, ITableOnDiagram } from "./diagram";
import { getPoint } from "./getPoint";
import { getNextPoint } from './getNextPoint';
import { getInterimPoints } from './getInterimPoints';
import { getOrthogonalPoints } from "./getOrthogonalPoints";


const getTable = (table: ITableOnDiagram[] , name: string): ITableOnDiagram => table.find(_ => _.name === name);

const getPointFromTable = (d: IDiagram, rel: IRelativePoint): IPoint => {
  return getPoint(getTable(d.tableOnDiagram, rel.name), rel);
};

const getBend = (a: IPoint, b: IPoint, c: IPoint): BendDirection => {
  const equalX = a.x === b.x && b.x === c.x;
  const equalY = a.y === b.y && b.y === c.y;
  const segment1Horizontal = a.y === b.y;
  const segment1Vertical = a.x === b.x;
  const segment2Horizontal = b.y === c.y;
  const segment2Vertical = b.x === c.x;

  if (equalX || equalY)
      return 'none';

  if( !(segment1Vertical || segment1Horizontal) ||
      !(segment2Vertical || segment2Horizontal) )
    return 'unknown';

  if (segment1Horizontal && segment2Vertical)
      return c.y > b.y ? 's' : 'n';
  else if (segment1Vertical && segment2Horizontal)
      return c.x > b.x ? 'e' : 'w';

  throw new Error('Nope');
}

export const removeUnnecessaryPoints = (points: IPoint[]): IPoint[] => {
  if (points.length <= 2)
    return points;

  const r: IPoint[] = [points[0]];

  for (let i = 1; i < points.length; i++) {
      const cur = points[i];

      if(i === (points.length - 1)) {
          r.push(cur);
          break;
      }
      const prev = points[i - 1];
      const next = points[i + 1];

      const bend = getBend(prev, cur, next);
      
      if (bend !== 'none')
        r.push(cur);
  }
  return r;
}

export const getRelationPoints = (diagram: IDiagram): IPoint[][] => {
  const { tableOnDiagram, relationToShow } = diagram;

  return relationToShow.map(({from, to, points}) => {
    const startPoint = getPointFromTable(diagram, from);
    const secondPoint = getNextPoint(startPoint, from);
    const endPoint = getPointFromTable(diagram, to);
    const preEndPoint = getNextPoint(endPoint, to);

    const shapeA = getTable(tableOnDiagram, from.name);
    const shapeB = getTable(tableOnDiagram, to.name);

    const interimPoints = points ?
      getOrthogonalPoints(secondPoint, preEndPoint, points):
      getInterimPoints(secondPoint, preEndPoint, from.side, to.side, shapeA, shapeB);

    return removeUnnecessaryPoints([
      startPoint,
      ...interimPoints,
      endPoint,
    ])
  });
};
