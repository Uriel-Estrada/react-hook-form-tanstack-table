import { ColumnDef } from "@tanstack/react-table";
export type Person = {
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  status: string;
  progress: number;
  delete: string;
};

export type City = {
  cityName: string;
  state: string;
  country: string;
  delete: string;
};

/**
 * With Generics
 */
// export interface TableProps<TData, TColumn> {
//TData = Person

export type Data = { [key: string]: string | number | (() => void) };

export type TableProps = {
  data: Data[];
  columns: ColumnDef<Data, any>[];
  appendObj: Data;
};

export type TableForm = {
  tableForm: Data[];
};

/**
 * Default
 */
export type TableFormU = {
  tableForm: Person[];
};

export type TablePropsU = {
  data: Person[];
  columns: ColumnDef<Person, any>[];
};
