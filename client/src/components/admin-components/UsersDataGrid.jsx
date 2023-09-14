import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { DataGrid } from "@mui/x-data-grid";
import Stack from "@mui/material/Stack";


const columns = [
  {
    field: "id",
    headerName: "Index",
    width: 150,
  },
  {
    field: "ID",
    headerName: "ID",
    width: 150,
  },
  {
    field: "name",
    headerName: "Name",
    width: 150,
  },
  {
    field: "email",
    headerName: "Email",
    width: 150,
  },
  {
    field: "password",
    headerName: "Password",
    width: 150,
  },
  {
    field: "address",
    headerName: "Address",
    width: 150,
  },
  {
    field: "preferences",
    headerName: "Preferences",
    width: 150,
  },
  {
    field: "profilePic",
    headerName: "Profile Picture",
    width: 150,
  },
];

const rows = [
  {id: 1, ID: 1, name: "John Doe", email: "abc@gmail.com", password: "123", address: "123, ABC Street", preferences: "Horror", profilePic: "pic1"},
  {id: 2, ID: 2, name: "Jane Doe", email: "abc2@gmail.com", password: "123", address: "123, ABC Street", preferences: "Horror", profilePic: "pic2"},
];

export default function UserDataGrid() {
  return (
    <>
      <Box sx={{ width: "100%" }}>
        {/* {" "}
        <Stack direction="row" spacing={1}>
          <Button size="small" onClick={null}>
            Add User
          </Button>
          <Button size="small" onClick={null}>
            Delete User
          </Button>
        </Stack> */}
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
    </>
  );
}
