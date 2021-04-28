import { IPoint, ITableOnDiagram, SideEnum } from "../interfaces/diagram";

export const getPoint = (position: ITableOnDiagram, side: SideEnum): IPoint => {
  let x: number;
  let y: number;
  switch (side) {
    case SideEnum.left:
      x = position.left - 10;
      y = position.height / 2 + position.top;
      return { x, y };
    case SideEnum.right:
      x = position.left + position.width + 10;
      y = position.height / 2 + position.top;
      return { x, y };
    case SideEnum.top:
      x = position.width / 2 + position.left;
      y = position.top - 10;
      return { x, y };
    case SideEnum.bottom:
      x = position.width / 2 + position.left;
      y = position.top + position.height + 10;
      return { x, y };
  }
};
