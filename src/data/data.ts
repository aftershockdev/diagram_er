import type { IDataModel, ITableOnDiagram } from "../interfaces/diagram";

import { SideEnum } from "../interfaces/diagram";

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
  relations: [
    {
      name: "one",
      from: {
        side: SideEnum.right,
        shift: 5,
      },
      to: {
        side: SideEnum.left,
        shift: 7,
      },
    },
    {
      name: "two",
      from: {
        side: SideEnum.right,
        shift: 5,
      },
      to: {
        side: SideEnum.left,
        shift: 7,
      },
    },
    {
      name: "three",
      from: {
        side: SideEnum.right,
        shift: 5,
      },
      to: {
        side: SideEnum.left,
        shift: 7,
      },
    },
    {
      name: "four",
      from: {
        side: SideEnum.right,
        shift: 5,
      },
      to: {
        side: SideEnum.left,
        shift: 7,
      },
    },
  ],
};

export const tablesOnDiagram: ITableOnDiagram[] = [
  {
    name: "Products",
    left: 50,
    top: 200,
    width: 200,
    height: 200,
  },
  {
    name: "Suppliers",
    left: 320,
    top: 200,
    width: 200,
    height: 200,
  },
  {
    name: "Categories",
    left: 600,
    top: 200,
    width: 200,
    height: 200,
  },
  {
    name: "Orders",
    left: 880,
    top: 200,
    width: 300,
    height: 200,
  },
];
