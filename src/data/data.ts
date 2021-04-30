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
      left: 50,
      top: 150,
      width: 200,
      height: 200,
    },
    {
      name: "Suppliers",
      left: 380,
      top: 500,
      width: 200,
      height: 200,
    },
    {
      name: "Categories",
      left: 650,
      top: 300,
      width: 200,
      height: 200,
    },
    {
      name: "Orders",
      left: 1050,
      top: 400,
      width: 300,
      height: 200,
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
      left: 380,
      top: 500,
      width: 200,
      height: 200,
    },
    {
      name: "Suppliers",
      left: 50,
      top: 400,
      width: 200,
      height: 200,
    },
    {
      name: "Categories",
      left: 780,
      top: 300,
      width: 200,
      height: 200,
    },
    {
      name: "Orders",
      left: 1350,
      top: 650,
      width: 300,
      height: 200,
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
        name: "Categories",
        side: SideEnum.left,
        shift: 0,
      },
    },
    {
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
    },
    {
      from: {
        name: "Suppliers",
        side: SideEnum.right,
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
        name: "Products",
        side: SideEnum.top,
        shift: 0,
      },
      to: {
        name: "Categories",
        side: SideEnum.top,
        shift: 0,
      },
    },
  ],
};
export const diagram_2: IDiagram = {
  tableOnDiagram: [
    {
      name: "Products",
      left: 120,
      top: 700,
      width: 200,
      height: 200,
    },
    {
      name: "Suppliers",
      left: 470,
      top: 640,
      width: 200,
      height: 200,
    },
    {
      name: "Categories",
      left: 650,
      top: 300,
      width: 200,
      height: 200,
    },
    {
      name: "Orders",
      left: 1050,
      top: 400,
      width: 300,
      height: 200,
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
