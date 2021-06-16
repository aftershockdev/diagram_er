import type { IPoint } from "./diagram";

export const convertToString = (p: IPoint[]): string =>
p.reduce((curV, _) => {
  const v = `${_.x} ${_.y}`;
  return curV === "" ? v : `${curV}, ${v}`;
}, "");
