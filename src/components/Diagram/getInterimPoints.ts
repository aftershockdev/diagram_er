import { IPoint, ITableOnDiagram, SideEnum } from "./diagram";

export const makeP = (x: number, y: number): IPoint => {
  return { x , y };
}
export const getInterimPoints = (
  start: IPoint,
  startSide: SideEnum,
  end: IPoint,
  endSide: SideEnum,
  shapeA: ITableOnDiagram,
  shapeB: ITableOnDiagram
): IPoint[] => {

  const points = (p: IPoint[]): IPoint[] => {
    return [start, ...p ,end]
  }

  const xDif = start.x - end.x;
  const yDif = start.y - end.y;

  const midX = start.x - xDif / 2;
  const midY = start.y - yDif / 2;

  const m = 40;

  const vertA = shapeA.height * 0.5 + m;
  const vertB = shapeB.height * 0.5 + m;

  const horA = shapeA.width * 0.5 + m;
  const horB = shapeB.width * 0.5 + m;

  const horDistance = horA > horB ? horA : horB
  const vertDistance = vertA > vertB ? vertA : vertB

  if (startSide === SideEnum.bottom || startSide === SideEnum.top
     && endSide === SideEnum.bottom || endSide === SideEnum.top) {

    if (xDif >= Math.abs(horDistance) || xDif <= -Math.abs(horDistance)) {
      return points([
        makeP(midX, start.y),
        makeP(midX, end.y)
      ])
    }

    if (start.x >= end.x) {
      return points([
        makeP(midX - horDistance, start.y),
        makeP(midX - horDistance, end.y)
      ])
    }

    if (start.x <= end.x) {
      return points([
        makeP(midX + horDistance, start.y),
        makeP(midX + horDistance, end.y)
      ])
    }
  }

  if (startSide === SideEnum.right || SideEnum.left && endSide === SideEnum.right || SideEnum.left) {

    if (yDif >= Math.abs(vertDistance) || yDif <= -Math.abs(vertDistance) ) {
      return points([
        makeP(start.x, midY),
        makeP(end.x, midY)
      ])
    }

    if (start.x >= end.x) {
      return points([
        makeP(start.x, midY - vertDistance),
        makeP(end.x,midY - vertDistance)
      ])
    }

    if (start.x <= end.x) {
      return points([
        makeP(start.x, midY + vertDistance),
        makeP(end.x,midY + vertDistance)
      ])
    }
  }
    return points([
      makeP(start.x, midY),
      makeP(end.x, midY)
    ])
};
