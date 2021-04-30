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
        name: "Orders",
        side: SideEnum.top,
        shift: 0,
      },
      to: {
        name: "Categories",
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
        side: SideEnum.left,
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
        shift: 0,
      },
      to: {
        name: "Categories",
        side: SideEnum.left,
        shift: 0,
      },
    },
    {
      from: {
        name: "Orders",
        side: SideEnum.bottom,
        shift: 0,
      },
      to: {
        name: "Categories",
        side: SideEnum.right,
        shift: 0,
      },
    },
    {
      from: {
        name: "Suppliers",
        side: SideEnum.left,
        shift: 0,
      },
      to: {
        name: "Categories",
        side: SideEnum.right,
        shift: 0,
      },
    },
    {
      from: {
        name: "Products",
        side: SideEnum.top,
        shift: 0,
      },
      to: {
        name: "Categories",
        side: SideEnum.left,
        shift: 0,
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
        shift: 0,
      },
      to: {
        name: "Suppliers",
        side: SideEnum.left,
        shift: 0,
      },
    },
    {
      from: {
        name: "Suppliers",
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
        name: "Categories",
        side: SideEnum.left,
        shift: 0,
      },
      to: {
        name: "Orders",
        side: SideEnum.left,
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
        name: "Categories",
        side: SideEnum.left,
        shift: 0,
      },
      to: {
        name: "Orders",
        side: SideEnum.left,
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
        side: SideEnum.top,
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
        side: SideEnum.left,
        shift: 0,
      },
      to: {
        name: "Orders",
        side: SideEnum.left,
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
        name: "Products",
        side: SideEnum.left,
        shift: 0,
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
        name: "Categories",
        side: SideEnum.left,
        shift: 0,
      },
      to: {
        name: "Orders",
        side: SideEnum.left,
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
