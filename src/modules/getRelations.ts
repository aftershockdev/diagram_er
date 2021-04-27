import type { IDataModel } from "../interfaces/data-model";
import { IDiagram, IRelationOnDiagram, SideEnum } from "../interfaces/diagram";

export const getRelations = (
  model: IDataModel,
  diagram: IDiagram,
  name: string
): IRelationOnDiagram => {
  const { tableOnDiagram, relationOnDiagram } = diagram;
  const { relations } = model;

  const result = relationOnDiagram.find((el) => el.name === name);
  if (!result) {
    return {
      name: name,
      from: {
        side: SideEnum.left,
        shift: 0,
      },
      to: {
        side: SideEnum.right,
        shift: 0,
      },
    };
  }
  return result;
};
