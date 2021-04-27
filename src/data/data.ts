import { IDiagram, SideEnum } from "../interfaces/diagram";
import type { IDataModel } from "../interfaces/data-model";

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
      from: "Products",
      to: "Suppliers",
    },
    {
      name: "two",
      from: "Orders",
      to: "Categories",
    },
    {
      name: "three",
      from: "Categories",
      to: "Orders",
    },
    {
      name: "four",
      from: "Suppliers",
      to: "Categories",
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
      top: 200,
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
  relationOnDiagram: [
    {
      name: "one",
      from: {
        side: SideEnum.left,
        shift: 1,
      },
      to: {
        side: SideEnum.right,
        shift: 5,
      },
    },
    {
      name: "two",
      from: {
        side: SideEnum.top,
        shift: 1,
      },
      to: {
        side: SideEnum.bottom,
        shift: 5,
      },
    },
    {
      name: "three",
      from: {
        side: SideEnum.right,
        shift: 1,
      },
      to: {
        side: SideEnum.left,
        shift: 5,
      },
    },
    {
      name: "four",
      from: {
        side: SideEnum.top,
        shift: 1,
      },
      to: {
        side: SideEnum.right,
        shift: 5,
      },
    },
  ],
};
