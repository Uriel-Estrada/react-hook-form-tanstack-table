import { Controller, useFormContext } from "react-hook-form";
import { CellContext, Table, Row, Column, Cell } from "@tanstack/react-table";
import { FC } from "react";
import { City, Data, Person } from "./types";
// interface EditableCellProps {
//   table: Table<TData>;
//   row: Row<TData>;
//   column: Column<TData>;
//   cell: Cell<TData>;
//   getValue: () => any;
//   renderValue: () => any;
// }
const EditableCell = ({
  table,
  row: { index },
  column: { id },
  getValue,
}: CellContext<Data, unknown>) => {
  // // We need to keep and update the state of the cell normally
  // const [value, setValue] = React.useState(initialValue);

  // const onChange = (e) => {
  //   setValue(e.target.value);
  // };

  // // We'll only update the external data when the input is blurred
  // const onBlur = () => {
  //   updateMyData(index, id, value);
  // };

  //As it is unknown, cast it as string
  const initialValue = getValue() as string;

  const { register } = useFormContext();

  //const defaultValue = getValues()["person"][index].firstName;

  // const render = () => {
  //   return <input {...register(getValue())} />;
  // };

  // console.log(`Value of row.${index}.${id} => ${initialValue}`);

  return (
    <>
      {/* Required for useFieldArray, cast as const */}
      <input {...register(`tableForm.${index}.${id}` as const, {})} />
      {/* <span>{initialValue}</span> */}
      {/* <Controller
        name={`people[${index}].firstName`}
        defaultValue={defaultValue}
        rules={{ required: { value: true, message: "field is required" } }}
        // control={control}
        render={render}
      /> */}
    </>
  );
};

export default EditableCell;
