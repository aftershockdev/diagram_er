import type { IPoint } from "./diagram";

export const getOrthogonalPoints = (secP: IPoint, preEndP: IPoint, points: IPoint[]): IPoint[] => {
let initialValue = 1;

const result = points.map((el, i) => {
    if (!i) {
      if (el.x === secP.x || el.y === secP.y)
        return el
      else
        console.error(`the starting point must contain one of the values. '${secP.x} or ${secP.y}'`)
    } else {
      if (el.x === points[i - initialValue].x || el.y === points[i - initialValue].y)
        return el
      else {
        console.error(`Points support only orthogonal approach.
        Point: ${JSON.stringify(el)} is not orthogonal.
        Point must include '${points[i - initialValue].x} or ${points[i - initialValue].y} '`)
        initialValue++
      }
    }

    if(i === points.length - 1){
      if (points[i].x === preEndP.x || points[i].y === preEndP.y )
        return el
      else
        console.error(`the end point must contain one of the values. '${preEndP.x} or ${preEndP.y}'`)
    }

  }).filter(el => el !== undefined)

  return [secP, ...result, preEndP]
}