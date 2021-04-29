import { IRelationToShow, ITableOnDiagram } from "../interfaces/diagram";
import { getPoint } from "./getPoint";

export const getCoordinates = (
  tables: ITableOnDiagram[],
  relations: IRelationToShow[]
): string[] => {
  return relations.map((relation) => {
    let startPos: ITableOnDiagram;
    let endPos: ITableOnDiagram;

    tables.forEach((table) => {
      if (table.name === relation.from.name) startPos = table;
      if (table.name === relation.to.name) endPos = table;
    });

    const startPoint = getPoint(startPos, relation.from.side);
    const endPoint = getPoint(endPos, relation.to.side);

    return `${startPoint.x} ${startPoint.y}, ${endPoint.x} ${endPoint.y}`;
  });
};
