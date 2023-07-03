import { useMemo } from "react";
import "./App.css";
//import { Table } from "./components/table-component";
import { ColumnDef } from "@tanstack/react-table";
import { dataCity, defaultData } from "./components/table-component/constants";
import { City, Data, Person } from "./components/table-component/types";
import { EditableCell, Table } from "./components/table-component";

function App() {
  let renderCount = 0;
  renderCount++;

  const defaultColumns = useMemo<ColumnDef<Data, any>[]>(
    () => [
      {
        header: "First Name",
        accessorKey: "firstName",
        footer: (props) => props.column.id,
      },
      {
        header: "Last Name",
        accessorKey: "lastName",
        footer: (props) => props.column.id,
      },
      {
        header: "Age",
        accessorKey: "age",
        footer: (props) => props.column.id,
      },
      {
        header: "Status",
        accessorKey: "status",
        footer: (props) => props.column.id,
      },
      {
        header: "Delete",
        accessorKey: "delete",
        cell: (props) => <EditableCell {...props} />,
      },
    ],
    []
  );

  const columnsCity = useMemo<ColumnDef<Data, any>[]>(
    () => [
      {
        header: "City Name",
        accessorKey: "cityName",
      },
      {
        header: "Country",
        accessorKey: "country",
      },
      {
        header: "State",
        accessorKey: "state",
        cell: (props) => <EditableCell {...props} />,
      },
      {
        header: () => null,
        accessorKey: "delete",
      },
    ],
    []
  );

  const onAppend = {
    age: 0,
    delete: "",
    firstName: "",
    lastName: "",
    progress: 0,
    status: "",
    visits: 0,
  } as Person;

  const onAppendCity = {
    cityName: "Monterrey",
    country: "Mexico",
    delete: "",
    state: "Nuevo Leon",
  } as City;

  return (
    <>
      <div>Render count: {renderCount}</div>
      <div>
        <h1>Table</h1>
        <Table
          data={defaultData as Data[]}
          columns={defaultColumns}
          appendObj={onAppend}
        />
        <Table
          data={dataCity as Data[]}
          columns={columnsCity}
          appendObj={onAppendCity}
        />

        {/* <h1>Table Unreusable</h1>
        <TableUnreusable data={defaultData} columns={defaultColumns} />
        <TableUnreusable data={dataCity} columns={columnsCity} /> */}
      </div>
    </>
  );
}

export default App;
