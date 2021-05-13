import { IPoint, ITableOnDiagram, SideEnum } from "./diagram";

export const makeP = (x: number, y: number): IPoint => {
  return { x , y };
}
export const getInterimPoints = (
  start: IPoint,
  end: IPoint,
  sideA: SideEnum,
  sideB: SideEnum,
  shapeA: ITableOnDiagram,
  shapeB: ITableOnDiagram
): IPoint[] => {

  const points = (p: IPoint[]): IPoint[] => {
    return [start, ...p ,end]
  }
  const m = 40;

  const xDif = start.x - end.x ;
  const yDif = start.y - end.y ;

  const midX = start.x - xDif / 2;
  const midY = start.y - yDif / 2;

  const vertA = shapeA.height * 0.5 + m;
  const vertB = shapeB.height * 0.5 + m;

  const horA = shapeA.width * 0.5 + m;
  const horB = shapeB.width * 0.5 + m;

  const horDistance = horA > horB ? horA : horB
  const vertDistance = vertA > vertB ? vertA : vertB


  const horIntersected = shapeA.left >= shapeB.left
  const vertIntersected = shapeA.top >= shapeB.top


  if(sideA === SideEnum.top){

    switch (sideB) {
      case SideEnum.left:

        if (vertIntersected) {
          if (shapeA.top > shapeB.top + shapeB.height) {
            return points([
              makeP(end.x - horDistance, start.y),
              makeP(end.x , start.y),
            ])
          }

          if (shapeA.top > shapeB.top) {
            if (shapeA.left < shapeB.left) {
              return points([
                makeP(start.x -horDistance, start.y),
                makeP(end.x , start.y),
              ])
            }

            return points([
              makeP(midX , start.y),
              makeP(midX , end.y + vertDistance ),
              makeP(end.x, end.y + vertDistance ),
              makeP(end.x , start.y),
            ])
          }
          return points([
            makeP(end.x - horDistance, start.y),
            makeP(end.x , start.y),
          ])
        }

        if (!vertIntersected && !horIntersected) {
          if (shapeA.left <= shapeB.left - shapeB.width - m) {
            return points([
              makeP(end.x - horDistance, start.y),
              makeP(end.x , start.y),
           ])
          }
        }

        if (!vertIntersected) {
          if (shapeA.top + vertDistance <= shapeB.top ) {
          return points([
                  makeP(start.x - horDistance, start.y),
                  makeP(start.x - horDistance, midY ),
                  makeP(end.x, midY ),
                  makeP(end.x , start.y),
            ])
          }

          return points([
            makeP(start.x - horDistance, start.y),
            makeP(end.x , start.y),
          ])
        }
        break;
    }
  }


  if (sideA === SideEnum.bottom || sideA === SideEnum.top && sideB === SideEnum.bottom || sideB === SideEnum.top) {

    if (xDif >= Math.abs(horDistance) || xDif <= -Math.abs(horDistance)) {
      return points([
        makeP(midX, start.y),
        makeP(midX, end.y)
      ])
    }

    if (horIntersected) {
      return points([
        makeP(midX - horDistance, start.y),
        makeP(midX - horDistance, end.y)
      ])
    }

    if (!horIntersected) {
      return points([
        makeP(midX + horDistance, start.y),
        makeP(midX + horDistance, end.y)
      ])
    }
  }

  if (sideA === SideEnum.right || sideA === SideEnum.left && sideB === SideEnum.right || sideB === SideEnum.left) {

    if (yDif >= Math.abs(vertDistance) || yDif <= -Math.abs(vertDistance) ) {
      return points([
        makeP(start.x, midY),
        makeP(end.x, midY)
      ])
    }

    if (vertIntersected) {
      return points([
        makeP(start.x, midY - vertDistance),
        makeP(end.x,midY - vertDistance)
      ])
    }

    if (!vertIntersected) {
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
