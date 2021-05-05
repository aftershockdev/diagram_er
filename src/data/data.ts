import { IDiagram, SideEnum } from "../components/Diagram/diagram";
import type { IDataModel } from "../components/Table/data-model";

export const dataModel: IDataModel = {
  tables: [
    {
      name: "Products",
      columns: [
        { name: "ProductID", type: "number" },
        { name: "ProductName", type: "string" },
        { name: "SupplierID", type: "number" },
        { name: "CategoryID", type: "number" },
      ],
    },
    {
      name: "Suppliers",
      columns: [
        { name: "SupplierID", type: "number" },
        { name: "CompanyName", type: "number" },
        { name: "ContactName", type: "number" },
        { name: "Address", type: "string" },
      ],
    },
    {
      name: "Categories",
      columns: [
        { name: "CategoryID", type: "number" },
        { name: "CategoryName", type: "string" },
        { name: "Description", type: "string" },
        { name: "Picture", type: "number" },
      ],
    },
    {
      name: "Orders",
      columns: [
        { name: "OrderID", type: "number" },
        { name: "ProductID", type: "number" },
        { name: "UnitPrice", type: "number" },
        { name: "Quantity", type: "number" },
        { name: "Discount", type: "number" },
      ],
    },
  ],
};

export const diagram: IDiagram = {
  tableOnDiagram: [
    {
      name: "Products",
      left: 30,
      top: 150,
      width: 50,
      height: 50,
    },
    {
      name: "Suppliers",
      left: 90,
      top: 250,
      width: 50,
      height: 50,
    },
    {
      name: "Categories",
      left: 150,
      top: 300,
      width: 50,
      height: 50,
    },
    {
      name: "Orders",
      left: 240,
      top: 50,
      width: 50,
      height: 50,
    },
  ],
  relationToShow: [
    {
      from: {
        name: "Products",
        side: SideEnum.left,
        shift: 10,
      },
      to: {
        name: "Orders",
        side: SideEnum.right,
        shift: 15,
      },
    },
    {
      from: {
        name: "Orders",
        side: SideEnum.top,
        shift: 5,
      },
      to: {
        name: "Products",
        side: SideEnum.bottom,
        shift: 15,
      },
    },
    {
      from: {
        name: "Categories",
        side: SideEnum.right,
        shift: 10,
      },
      to: {
        name: "Orders",
        side: SideEnum.left,
        shift: 10,
      },
    },
    {
      from: {
        name: "Products",
        side: SideEnum.top,
        shift: 10,
      },
      to: {
        name: "Suppliers",
        side: SideEnum.top,
        shift: 5,
      },
    },
  ],
};
export const diagram_1: IDiagram = {
  tableOnDiagram: [
    {
      name: "Products",
      left: 55,
      top: 222,
      width: 50,
      height: 50,
    },
    {
      name: "Suppliers",
      left: 148,
      top: 333,
      width: 50,
      height: 50,
    },
    {
      name: "Categories",
      left: 400,
      top: 400,
      width: 50,
      height: 50,
    },
    {
      name: "Orders",
      left: 150,
      top: 50,
      width: 50,
      height: 50,
    },
  ],
  relationToShow: [
    {
      from: {
        name: "Products",
        side: SideEnum.top,
        shift: 10,
      },
      to: {
        name: "Categories",
        side: SideEnum.left,
        shift: 15,
      },
    },
    {
      relName: "one",
      from: {
        name: "Orders",
        side: SideEnum.bottom,
        shift: 10,
      },
      to: {
        name: "Categories",
        side: SideEnum.top,
        shift: 0,
      },
      points: [
        { x: 300, y: 150 },
        { x: 350, y: 150 },
        { x: 350, y: 200 },
        { x: 300, y: 200 },
      ],
    },
    {
      from: {
        name: "Suppliers",
        side: SideEnum.left,
        shift: 10,
      },
      to: {
        name: "Categories",
        side: SideEnum.right,
        shift: -15,
      },
    },
    {
      from: {
        name: "Products",
        side: SideEnum.top,
        shift: 10,
      },
      to: {
        name: "Categories",
        side: SideEnum.left,
        shift: 5,
      },
    },
  ],
};
export const diagram_2: IDiagram = {
  tableOnDiagram: [
    {
      name: "Products",
      left: 200,
      top: 220,
      width: 50,
      height: 50,
    },
    {
      name: "Suppliers",
      left: 400,
      top: 400,
      width: 50,
      height: 50,
    },
    {
      name: "Categories",
      left: 150,
      top: 300,
      width: 50,
      height: 50,
    },
    {
      name: "Orders",
      left: 240,
      top: 50,
      width: 50,
      height: 50,
    },
  ],
  relationToShow: [
    {
      from: {
        name: "Products",
        side: SideEnum.right,
        shift: -10,
      },
      to: {
        name: "Suppliers",
        side: SideEnum.left,
        shift: -10,
      },
    },
    {
      from: {
        name: "Suppliers",
        side: SideEnum.left,
        shift: 5,
      },
      to: {
        name: "Orders",
        side: SideEnum.right,
        shift: 8,
      },
    },
    {
      from: {
        name: "Categories",
        side: SideEnum.left,
        shift: 12,
      },
      to: {
        name: "Orders",
        side: SideEnum.left,
        shift: 16,
      },
    },
    {
      from: {
        name: "Suppliers",
        side: SideEnum.top,
        shift: 8,
      },
      to: {
        name: "Products",
        side: SideEnum.right,
        shift: 10,
      },
    },
  ],
};
export const diagram_3: IDiagram = {
  tableOnDiagram: [
    {
      name: "Products",
      left: 30,
      top: 150,
      width: 50,
      height: 50,
    },
    {
      name: "Suppliers",
      left: 90,
      top: 250,
      width: 50,
      height: 50,
    },
    {
      name: "Categories",
      left: 150,
      top: 300,
      width: 50,
      height: 50,
    },
    {
      name: "Orders",
      left: 240,
      top: 50,
      width: 50,
      height: 50,
    },
  ],
  relationToShow: [
    {
      from: {
        name: "Products",
        side: SideEnum.left,
        shift: 12,
      },
      to: {
        name: "Suppliers",
        side: SideEnum.right,
        shift: 8,
      },
    },
    {
      from: {
        name: "Suppliers",
        side: SideEnum.left,
        shift: 15,
      },
      to: {
        name: "Orders",
        side: SideEnum.right,
        shift: 5,
      },
    },
    {
      from: {
        name: "Categories",
        side: SideEnum.left,
        shift: 10,
      },
      to: {
        name: "Orders",
        side: SideEnum.left,
        shift: 11,
      },
    },
    {
      from: {
        name: "Suppliers",
        side: SideEnum.top,
        shift: 7,
      },
      to: {
        name: "Products",
        side: SideEnum.right,
        shift: 3,
      },
    },
  ],
};
export const diagram_4: IDiagram = {
  tableOnDiagram: [
    {
      name: "Products",
      left: 400,
      top: 150,
      width: 50,
      height: 50,
    },
    {
      name: "Suppliers",
      left: 90,
      top: 150,
      width: 50,
      height: 50,
    },
    {
      name: "Categories",
      left: 150,
      top: 380,
      width: 50,
      height: 50,
    },
    {
      name: "Orders",
      left: 240,
      top: 50,
      width: 50,
      height: 50,
    },
  ],
  relationToShow: [
    {
      from: {
        name: "Products",
        side: SideEnum.bottom,
        shift: 10,
      },
      to: {
        name: "Suppliers",
        side: SideEnum.right,
        shift: -10,
      },
    },
    {
      from: {
        name: "Suppliers",
        side: SideEnum.top,
        shift: 5,
      },
      to: {
        name: "Orders",
        side: SideEnum.bottom,
        shift: 10,
      },
    },
    {
      from: {
        name: "Categories",
        side: SideEnum.left,
        shift: 12,
      },
      to: {
        name: "Orders",
        side: SideEnum.left,
        shift: 9,
      },
    },
    {
      from: {
        name: "Suppliers",
        side: SideEnum.right,
        shift: 10,
      },
      to: {
        name: "Products",
        side: SideEnum.left,
        shift: 12,
      },
    },
  ],
};
export const diagram_5: IDiagram = {
  tableOnDiagram: [
    {
      name: "Products",
      left: 30,
      top: 150,
      width: 50,
      height: 50,
    },
    {
      name: "Suppliers",
      left: 90,
      top: 250,
      width: 50,
      height: 50,
    },
    {
      name: "Categories",
      left: 150,
      top: 300,
      width: 50,
      height: 50,
    },
    {
      name: "Orders",
      left: 240,
      top: 50,
      width: 50,
      height: 50,
    },
  ],
  relationToShow: [
    {
      from: {
        name: "Products",
        side: SideEnum.left,
        shift: 10,
      },
      to: {
        name: "Suppliers",
        side: SideEnum.right,
        shift: 5,
      },
    },
    {
      from: {
        name: "Suppliers",
        side: SideEnum.left,
        shift: 5,
      },
      to: {
        name: "Orders",
        side: SideEnum.right,
        shift: 8,
      },
    },
    {
      from: {
        name: "Categories",
        side: SideEnum.left,
        shift: 12,
      },
      to: {
        name: "Orders",
        side: SideEnum.left,
        shift: 10,
      },
    },
    {
      from: {
        name: "Suppliers",
        side: SideEnum.top,
        shift: 0,
      },
      to: {
        name: "Products",
        side: SideEnum.right,
        shift: -10,
      },
    },
  ],
};
export const diagram_6: IDiagram = {
  tableOnDiagram: [
    {
      name: "Categories",
      left: 20,
      top: 190,
      width: 50,
      height: 50,
    },
    {
      name: "Suppliers",
      left: 80,
      top: 350,
      width: 50,
      height: 50,
    },
    {
      name: "Products",
      left: 100,
      top: 100,
      width: 50,
      height: 50,
    },
    {
      name: "Orders",
      left: 300,
      top: 180,
      width: 50,
      height: 50,
    },
  ],
  relationToShow: [
    {
      from: {
        name: "Products",
        side: SideEnum.right,
        shift: 0,
      },
      to: {
        name: "Suppliers",
        side: SideEnum.bottom,
        shift: 0,
      },
    },
    {
      from: {
        name: "Suppliers",
        side: SideEnum.top,
        shift: 0,
      },
      to: {
        name: "Orders",
        side: SideEnum.top,
        shift: 0,
      },
    },
    {
      from: {
        name: "Categories",
        side: SideEnum.left,
        shift: 0,
      },
      to: {
        name: "Orders",
        side: SideEnum.right,
        shift: 0,
      },
    },
    {
      from: {
        name: "Suppliers",
        side: SideEnum.top,
        shift: 0,
      },
      to: {
        name: "Products",
        side: SideEnum.right,
        shift: 0,
      },
    },
  ],
};
export const diagram_7: IDiagram = {
  tableOnDiagram: [
    {
      name: "Products",
      left: 145,
      top: 50,
      width: 50,
      height: 50,
    },
    {
      name: "Suppliers",
      left: 20,
      top: 200,
      width: 50,
      height: 50,
    },
    {
      name: "Categories",
      left: 100,
      top: 300,
      width: 50,
      height: 50,
    },
    {
      name: "Orders",
      left: 300,
      top: 220,
      width: 50,
      height: 50,
    },
  ],
  relationToShow: [
    {
      from: {
        name: "Products",
        side: SideEnum.left,
        shift: 0,
      },
      to: {
        name: "Suppliers",
        side: SideEnum.right,
        shift: 0,
      },
    },
    {
      from: {
        name: "Suppliers",
        side: SideEnum.right,
        shift: 0,
      },
      to: {
        name: "Orders",
        side: SideEnum.bottom,
        shift: 0,
      },
    },
    {
      from: {
        name: "Categories",
        side: SideEnum.right,
        shift: 0,
      },
      to: {
        name: "Orders",
        side: SideEnum.top,
        shift: 0,
      },
    },
    {
      from: {
        name: "Suppliers",
        side: SideEnum.top,
        shift: 0,
      },
      to: {
        name: "Products",
        side: SideEnum.right,
        shift: 0,
      },
    },
  ],
};

export const simple_diagram: IDiagram = {
  tableOnDiagram: [
    {
      name: "Products",
      left: 100,
      top: 200,
      width: 50,
      height: 50,
    },
    {
      name: "Suppliers",
      left: 300,
      top: 200,
      width: 50,
      height: 50,
    },
  ],
  relationToShow: [
    {
      relName: 'one',
      from: {
        name: "Products",
        side: SideEnum.bottom,
        shift: 0,
      },
      to: {
        name: "Suppliers",
        side: SideEnum.top,
        shift: 0,
      },
      points: [
        { x: 50, y: 270 },
        { x: 50, y: 180 },
        { x: 230, y: 180 },
        { x: 230, y: 270 },
        { x: 370, y: 270 },
        { x: 370, y: 180 },
      ],
    },
    {
      relName: 'two',
      from: {
        name: "Products",
        side: SideEnum.left,
        shift: 0,
      },
      to: {
        name: "Suppliers",
        side: SideEnum.bottom,
        shift: 0,
      },
      points: [
        { x: 80, y: 300 },
        { x: 250, y: 300 },
        { x: 250, y: 350 },
        { x: 300, y: 350 },
        { x: 300, y: 300 },
        { x: 325, y: 300 },
      ],
    },
  ],
}
export const simple_diagram_1: IDiagram = {
  tableOnDiagram: [
    {
      name: "Categories",
      left: 100,
      top: 300,
      width: 50,
      height: 50,
    },
    {
      name: "Orders",
      left: 300,
      top: 220,
      width: 50,
      height: 50,
    },
  ],
  relationToShow: [
    {
      relName: 'one',
      from: {
        name: "Categories",
        side: SideEnum.left,
        shift: 0,
      },
      to: {
        name: "Orders",
        side: SideEnum.right,
        shift: 0,
      },
      points: [
        { x: 80, y: 200 },
        { x: 200, y: 200 },
        { x: 200, y: 150 },
        { x: 250, y: 100 },
        { x: 350, y: 100 },
        { x: 400, y: 150 },
        { x: 400, y: 245 },
      ],
    },
    {
      relName: 'two',
      from: {
        name: "Orders",
        side: SideEnum.left,
        shift: 0,
      },
      to: {
        name: "Categories",
        side: SideEnum.bottom,
        shift: 0,
      },
      points: [
          { x: 280, y: 350 },
          { x: 250, y: 380 },
          { x: 350, y: 450 },
          { x: 55, y: 450 },
          { x: 155, y: 380 },
      ],
    },
  ],
}
export const simple_diagram_2: IDiagram = {
  tableOnDiagram: [
    {
      name: "Categories",
      left: 100,
      top: 300,
      width: 50,
      height: 50,
    },
    {
      name: "Orders",
      left: 300,
      top: 220,
      width: 50,
      height: 50,
    },
  ],
  relationToShow: [
    {
      relName: 'one',
      from: {
        name: "Categories",
        side: SideEnum.top,
        shift: 0,
      },
      to: {
        name: "Orders",
        side: SideEnum.bottom,
        shift: 0,
      },
      points: [
        { x: 125, y: 150 },
        { x: 200, y: 150 },
        { x: 200, y: 290 },
      ],
    },
    {
      relName: 'two',
      from: {
        name: "Orders",
        side: SideEnum.right,
        shift: 0,
      },
      to: {
        name: "Categories",
        side: SideEnum.left,
        shift: 0,
      },
      points: [
        { x: 370, y: 200 },
        { x: 280, y: 200 },
        { x: 280, y: 380 },
        { x: 80, y: 380 }
      ],
    },
  ],
}