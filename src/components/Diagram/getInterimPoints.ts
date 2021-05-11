import { IPoint, ITableOnDiagram, SideEnum } from "./diagram";

export const getInterimPoints = (
  start: IPoint,
  startSide: SideEnum,
  end: IPoint,
  endSide: SideEnum,
  shapeA: ITableOnDiagram,
  shapeB: ITableOnDiagram
): IPoint[] => {
  const xDif = start.x - end.x;
  const yDif = start.y - end.y;

  const midX = start.x - xDif / 2;
  const midY = start.y - yDif / 2;

  const m = 20;

  const vertA = shapeA.height * 0.5 + m;
  const vertB = shapeB.height * 0.5 + m;

  const horA = shapeA.width * 0.5 + m;
  const horB = shapeB.width * 0.5 + m;

  const horDistance = horA > horB? horA: horB
  const vertDistance = vertA > vertB? vertA : vertB

  if (startSide === SideEnum.bottom || startSide === SideEnum.top
     && endSide === SideEnum.bottom || endSide === SideEnum.top) {
    if(xDif >= Math.abs(horDistance) || xDif <= -Math.abs(horDistance) ) {
      return [
        start,
        { x: midX, y: start.y  },
        { x: midX, y: end.y  },
        end,
      ];
    }

    if(start.x >= end.x) {
      return [
        start,
        { x: midX - horDistance, y: start.y  },
        { x: midX - horDistance, y: end.y  },
        end,
      ];
    }
    if(start.x <= end.x) {
      return [
        start,
        { x: midX + horDistance, y: start.y },
        { x: midX + horDistance, y: end.y },
        end,
      ];
    }
  }

  if(startSide === SideEnum.right || SideEnum.left && endSide === SideEnum.right || SideEnum.left) {
    if(yDif >= Math.abs(vertDistance) || yDif <= -Math.abs(vertDistance) ) {
      return [
        start,
        { x: start.x, y: midY  },
        { x: end.x, y: midY  },
        end,
      ];
    }

    if(start.y >= end.y){
      return [
        start,
        { x: start.x, y: midY - vertDistance },
        { x: end.x, y: midY - vertDistance },
        end,
      ];
    }
    if(start.y <= end.y) {
      return [
        start,
        { x: start.x, y: midY + vertDistance },
        { x: end.x, y: midY + vertDistance },
        end,
      ];
    }
  }
};
