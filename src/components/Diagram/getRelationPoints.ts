import { IDiagram, IPoint, IRelativePoint, BendDirection, ITableOnDiagram, DirectionEnum, IConnectorMoverPoint, IConnectorBreakerPoint } from "./diagram";
import { getPoint } from "./getPoint";
import { makeP } from "./getPoint";
import { getNextPoint } from './getNextPoint';
import { getInterimPoints } from './getInterimPoints';

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
};

export const removeRepeatedPoints = (points: IPoint[]): IPoint[] => { 

  const result: IPoint[] = [];
  const map = new Map<number, number[]>();

  points.forEach(p => {
      const {x, y} = p;
      let arr: number[] = map.get(y) || map.set(y, []).get(y)!;

      if(arr.indexOf(x) < 0) {
          arr.push(x);
      }
  });

  for(const [y, xs] of map){
      for(const x of xs){
          result.push(makeP(x, y));
      }
  }

  return result;
};

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
};

export const getRelationPoints = (diagram: IDiagram): IPoint[][] => {

  const { tableOnDiagram, relationToShow } = diagram;

  return relationToShow.map(({from, to, points}) => {
    const startPoint = getPointFromTable(diagram, from);
    const endPoint = getPointFromTable(diagram, to);
    const secondPoint = getNextPoint(startPoint, from);
    const preEndPoint = getNextPoint(endPoint, to);

    const shapeA = getTable(tableOnDiagram, from.name);
    const shapeB = getTable(tableOnDiagram, to.name);

    const interimPoints = getInterimPoints(secondPoint, preEndPoint, from.side, to.side, shapeA, shapeB);
    if (points) {
      removeRepeatedPoints(removeUnnecessaryPoints(points));
      const secP = getNextPoint(points[points.length - 1], to);
      const preP = getNextPoint(points[0], from);
  
      return removeRepeatedPoints(removeUnnecessaryPoints([
        startPoint,
        ...getInterimPoints(secondPoint, preP, from.side, to.side, shapeA, shapeB),
        ...points,
        ...getInterimPoints(secP, preEndPoint, to.side, from.side, shapeA, shapeB),
        endPoint,
      ])
      )
    }
    return removeUnnecessaryPoints([
      startPoint,
      ...interimPoints,
      endPoint,
    ])
  });
};

export const getConnectorLineBreakPoints = (p: IPoint[]): IConnectorBreakerPoint[] => {
  const breakPoints = [];

  for (let i = 0; i < p.length; i++) {
    const cur = p[i];
    const next = p[i + 1];
   
    if (i !== p.length - 1) { 
        if (cur.x === next.x) {
            const yDif = cur.y - next.y ;
            const midYstart = cur.y - yDif / 1.3;
            const midY = cur.y - yDif / 2;
            const midYend = cur.y - yDif / 4;
            
            breakPoints.push({
              direction: DirectionEnum.h,
              point: makeP(cur.x, midYstart),
              rotatePoints: {
                first: makeP(cur.x, next.y),
                second: makeP(cur.x, midY),
                insertIndex: i
              }
            },
            {
              direction: DirectionEnum.h,
              point: makeP(cur.x, midYend),
              rotatePoints: {
                first: makeP(cur.x, midY),
                second: makeP(next.x, next.y)
              }
            });
        }
        
        if (cur.y === next.y) {
            const xDif = cur.x - next.x;
            const midXstart = cur.x - xDif / 1.3;
            const midXend = cur.x - xDif / 4;
            const midX =  cur.x - xDif / 2;

            breakPoints.push({
              direction: DirectionEnum.v,
              point: makeP(midXstart, cur.y),
              rotatePoints: {
                first: makeP(next.x, cur.y),
                second: makeP(midX, cur.y),
                insertIndex: i
              }
            },
            {
              direction: DirectionEnum.v,
              point: makeP(midXend, cur.y),
              rotatePoints: {
                first: makeP(midX, cur.y),
                second: makeP(next.x, next.y)
              }
            });
        }
    }
  }

  return breakPoints;
};

export const getConnectorMoverPoints = (p: IPoint[]): IConnectorMoverPoint[] => {
  const middlePoints: IConnectorMoverPoint[] = [];

  for (let i = 0; i < p.length; i++) {
    const cur = p[i];
    const next = p[i + 1];
   
    if (i !== p.length - 1) { 
        if (cur.x === next.x) {
            const yDif = cur.y - next.y;
            const midY = cur.y - yDif / 2;
            middlePoints.push({
              direction: DirectionEnum.h,
              point: makeP(cur.x, midY),
              segmentStartPoint: makeP(cur.x, cur.y),
              segmentEndPoint: makeP(next.x, next.y)
            });
        }
        if (cur.y === next.y) {
            const xDif = cur.x - next.x;
            const midX = cur.x - xDif / 2;
            middlePoints.push({
              direction: DirectionEnum.v,
              point: makeP(midX, cur.y),
              segmentStartPoint: makeP(cur.x, cur.y),
              segmentEndPoint: makeP(next.x, next.y)
            });
        }
    }
  }

  return middlePoints
};