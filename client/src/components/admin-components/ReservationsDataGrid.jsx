import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const columns = [
  {
    field: "id",
    headerName: "Index",
    width: 150,
  },
  {
    field: "reservationID",
    headerName: "ID",
    width: 150,
  },
  {
    field: "reservationDate",
    headerName: "Reservation Date",
    width: 150,
  },
  {
    field: "bookRef",
    headerName: "Book Ref",
    width: 150,
  },
  {
    field: "bookStoreRef",
    headerName: "BookStore Ref",
    width: 150,
  },
  {
    field: "quantity",
    headerName: "Quantity",
    width: 150,
  },
  {
    field: "reservationTime",
    headerName: "Reservation Time",
    width: 150,
  },
];

const rows = [
  {
    id: 1,
    reservationID: 1,
    reservationDate: "2021-10-10",
    bookRef: 1,
    bookStoreRef: 1,
    quantity: 1,
    reservationTime: "10:00",
  },
  {
    id: 2,
    reservationID: 2,
    reservationDate: "2021-10-10",
    bookRef: 2,
    bookStoreRef: 2,
    quantity: 2,
    reservationTime: "10:00",
  },
  {
    id: 3,
    reservationID: 3,
    reservationDate: "2021-10-10",
    bookRef: 3,
    bookStoreRef: 3,
    quantity: 3,
    reservationTime: "10:00",
  },
];

export default function ReservationDataGrid() {
  return (
    <Box sx={{ width: "100%" }}>
      {" "}
      <Stack direction="row" spacing={1}>
        {/* <Button size="small" onClick={null}>
          Add Reservation
        </Button>
        <Button size="small" onClick={null}>
          Delete Reservation
        </Button> */} 
      </Stack>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        // checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
