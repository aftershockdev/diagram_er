import type { IDataModel } from "../interfaces/data-model";
import type { IDiagram } from "../interfaces/diagram";
import { getPoint } from "./getPoint";

export const getRelativePoint = (
  dataModel: IDataModel,
  diagram: IDiagram,
  name: string
): string => {
  const { relations } = dataModel;
  const { tableOnDiagram, relationOnDiagram } = diagram;

  const relationName = relations.find((el) => el.name === name);
  const relationSide = relationOnDiagram.find((el) => el.name === name);

  const startPos = tableOnDiagram.find((el) => el.name === relationName.from);
  const endPos = tableOnDiagram.find((el) => el.name === relationName.to);

  const startSide = relationSide.from;
  const endSide = relationSide.to;

  const startPoint = getPoint(startPos, startSide.side);
  const endPoint = getPoint(endPos, endSide.side);

  const result = `${startPoint.x} ${startPoint.y}, ${endPoint.x} ${endPoint.y}`
  
  return result
};
