import { createColumnHelper } from "@tanstack/react-table";
import { City, Person } from "./types";

export const columnHelper = createColumnHelper<Person>();

export const defaultData: Person[] = [
  {
    firstName: "Tanner",
    lastName: "Linsley",
    age: 24,
    visits: 100,
    status: "In Relationship",
    progress: 50,
    delete: "",
  },
  {
    firstName: "Tandy",
    lastName: "Miller",
    age: 40,
    visits: 40,
    status: "Single",
    progress: 80,
    delete: "",
  },
  {
    firstName: "Joe",
    lastName: "Dirte",
    age: 45,
    visits: 20,
    status: "Complicated",
    progress: 10,
    delete: "",
  },
  {
    firstName: "Joe2",
    lastName: "Dirte2",
    age: 45,
    visits: 20,
    status: "Complicated",
    progress: 10,
    delete: "",
  },
  {
    firstName: "Joe3",
    lastName: "Dirte3",
    age: 50,
    visits: 20,
    status: "Complicated",
    progress: 10,
    delete: "",
  },
];

export const dataCity: City[] = [
  {
    cityName: "CDMX",
    country: "Mexico",
    state: "Ciudad de Mexico",
    delete: "OK",
  },
  {
    cityName: "Guadalajara",
    country: "Mexico",
    state: "Jalisco",
    delete: "OK",
  },
  {
    cityName: "Monterrey",
    country: "Mexico",
    state: "Nuevo Leon",
    delete: "OK",
  },
  {
    cityName: "New York",
    country: "USA",
    state: "Washington DC",
    delete: "OK",
  },
];
