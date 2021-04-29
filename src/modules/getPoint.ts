import { IPoint, ITableOnDiagram, SideEnum } from "../interfaces/diagram";

export const getPoint = (pos: ITableOnDiagram, side: SideEnum): IPoint => {
  const divison = 2;
  const yPos = pos.height / divison + pos.top;
  const xPos = pos.width / divison + pos.left;
  switch (side) {
    case SideEnum.left:
      return { x: pos.left, y: yPos };
    case SideEnum.right:
      return { x: pos.left + pos.width, y: yPos };
    case SideEnum.top:
      return { x: xPos, y: pos.top };
    case SideEnum.bottom:
      return { x: xPos, y: pos.top + pos.height };
  }
};
