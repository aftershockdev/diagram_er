import { IPoint, SideEnum } from "./diagram";

export const getInterimPoints = (
  start: IPoint,
  startSide: SideEnum,
  end: IPoint,
  endSide: SideEnum
): IPoint[] => {
  const xDif = start.x - end.x;
  const yDif = start.y - end.y;

  const midX = start.x - xDif / 2;
  const midY = start.y - yDif / 2;
  if (startSide === SideEnum.bottom || endSide === SideEnum.bottom) {
    return [
      { x: midX, y: start.y },
      { x: midX, y: end.y },
    ];
  }
  return [
    { x: start.x, y: midY },
    { x: end.x, y: midY },
  ];
};
