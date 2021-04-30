import { IPoint, IRelativePoint, SideEnum } from "./diagram";

const shift = 20;

export const getNextpoint = (point: IPoint, rel: IRelativePoint): IPoint => {
  switch (rel.side) {
    case SideEnum.bottom:
      return { x: point.x, y: point.y + shift };
    case SideEnum.top:
      return { x: point.x, y: point.y - shift };
    case SideEnum.left:
      return { x: point.x - shift, y: point.y };
    case SideEnum.right:
      return { x: point.x + shift, y: point.y };
  }
};
