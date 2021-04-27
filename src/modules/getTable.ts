import type { IDataModel, ITable } from "../interfaces/data-model";

export const getTable = (model: IDataModel, name: string): ITable => {
  return model.tables.find((el) => el.name === name);
};
