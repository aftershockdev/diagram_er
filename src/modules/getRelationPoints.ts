import type { IRelationToShow, ITableOnDiagram } from "../interfaces/diagram";
import { getPoint } from "./getPoint";

export const getRelationPoints = (
  tables: ITableOnDiagram[],
  relations: IRelationToShow[]
): any[] => {
  return relations.map((relation) => {
    const startPos = tables.find((t) => t.name === relation.from.name);
    const endPos = tables.find((t) => t.name === relation.to.name);

    const startPoint = getPoint(startPos, relation.from.side);
    const endPoint = getPoint(endPos, relation.to.side);

    const startCords = [];
    const endCords = [];

    startCords.push(startPoint.x, startPoint.y);
    endCords.push(endPoint.x, endPoint.y);

    let mid = (startPoint.x + endPoint.x) / 2;

    if (startPoint.x < endPoint.x && startPoint.x === endPoint.x) mid = startPoint.x - startPoint.y;
    if (startPoint.x >= endPoint.x && startPoint.x === endPoint.x) mid = endPoint.x - endPoint.y;

    return [startCords,  [mid, startPoint.y], [mid, endPoint.y], endCords];
  });
};
