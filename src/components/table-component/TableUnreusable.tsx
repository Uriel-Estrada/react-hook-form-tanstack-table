import { FC } from "react";
import { TableFormU, TablePropsU } from "./types";
import { FormProvider, useForm, useFieldArray } from "react-hook-form";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";

const TableUnreusable: FC<TablePropsU> = ({ data, columns }) => {
  let tableRenderCount = 0;

  const formMethods = useForm<TableFormU>({
    defaultValues: {
      tableForm: data,
    },
  });

  const { fields, prepend, remove } = useFieldArray({
    control: formMethods.control,
    name: "tableForm",
  });

  const table = useReactTable({
    data: fields,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const onSubmit = (x: any) => {
    console.warn(x);
  };

  const onAdd = () => {
    prepend({
      firstName: "",
      age: 0,
      lastName: "",
      progress: 0,
      status: "",
      visits: 0,
      delete: "",
    });
  };

  tableRenderCount++;
  return (
    <>
      <FormProvider {...formMethods}>
        <div> Render Count: {tableRenderCount}</div>
        <form noValidate onSubmit={formMethods.handleSubmit(onSubmit)}>
          <table>
            <thead>
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody>
              {table.getRowModel().rows.map((row) => (
                <tr key={row.id}>
                  {row.getVisibleCells().map((cell) => (
                    <td key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
          {/* <div className="pagination">
            <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
              {"<<"}
            </button>{" "}
            <button onClick={() => previousPage()} disabled={!canPreviousPage}>
              {"<"}
            </button>{" "}
            <button onClick={() => nextPage()} disabled={!canNextPage}>
              {">"}
            </button>{" "}
            <button
              onClick={() => gotoPage(pageCount - 1)}
              disabled={!canNextPage}
            >
              {">>"}
            </button>{" "}
            <span>
              Page{" "}
              <strong>
                {pageIndex + 1} of {pageOptions.length}
              </strong>{" "}
            </span>
            <span>
              | Go to page:{" "}
              <input
                type="number"
                defaultValue={pageIndex + 1}
                onChange={(e) => {
                  const page = e.target.value ? Number(e.target.value) - 1 : 0;
                  gotoPage(page);
                }}
                style={{ width: "100px" }}
              />
            </span>{" "}
            <select
              value={pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
              }}
            >
              {[10, 20, 30, 40, 50].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  Show {pageSize}
                </option>
              ))}
            </select>
          </div> */}
          <button type="submit">Submit</button>
          <button type="button" onClick={onAdd}>
            Add
          </button>
        </form>
      </FormProvider>
    </>
  );
};

export default TableUnreusable;
