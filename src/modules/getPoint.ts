import type { IDataModel } from "../interfaces/data-model";
import type { IDiagram, IPoint } from "../interfaces/diagram";

export const getPoint = (
  dataModel: IDataModel,
  diagram: IDiagram,
  name: string,
  direction: string
): IPoint => {
  const { relations } = dataModel;
  const { tableOnDiagram, relationOnDiagram } = diagram;

  const relationName = relations.find((el) => el.name === name);
  const relationDiagram = relationOnDiagram.find((el) => el.name === name);

  const { left, top, width, height } = tableOnDiagram.find(
    (el) => el.name === relationName[direction]
  );
  const x = left;
  const y = top;
  return { x, y };
};
