import { IPoint, IRelativePoint, ITableOnDiagram, SideEnum } from "./diagram";

export const getPoint = (pos: ITableOnDiagram, rel: IRelativePoint): IPoint => {
  const divison = 0.5;
  const yPos = pos.height * divison + pos.top + rel.shift;
  const xPos = pos.width * divison + pos.left + rel.shift;
  const { side } = rel;
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
