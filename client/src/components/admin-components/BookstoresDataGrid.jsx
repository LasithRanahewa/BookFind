import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { DataGrid } from "@mui/x-data-grid";
import Stack from "@mui/material/Stack";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
// import BookstoreForm from "./BookstoreForm";

function BookstoreForm({ open, onClose, onSubmit }) {
  const [name, setName] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [brn, setBrn] = React.useState("");
  const [rating, setRating] = React.useState(1);
  const [copies, setCopies] = React.useState(1);
  const [description, setDescription] = React.useState("");
  const [bookstorePic, setBookstorePic] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({
      name,
      address,
      phoneNumber,
      brn,
      rating,
      copies,
      description,
      bookstorePic,
    });
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add Bookstore</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="BRN"
            value={brn}
            onChange={(e) => setBrn(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Rating"
            type="number"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Copies"
            type="number"
            value={copies}
            onChange={(e) => setCopies(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            fullWidth
            margin="normal"
            multiline
            rows={4}
          />
          <TextField
            label="Bookstore Pic"
            value={bookstorePic}
            onChange={(e) => setBookstorePic(e.target.value)}
            fullWidth
            margin="normal"
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit}>Submit</Button>
      </DialogActions>
    </Dialog>
  );
}

const handleFormSubmit = (formData) => {
  // Here you can handle the form data however you need to, such as sending it to a server or updating state
  console.log(formData);
};

const columns = [
  {
    field: "id",
    headerName: "Index",
    width: 150,
  },
  {
    field: "vendorID",
    headerName: "ID",
    width: 150,
  },
  {
    field: "name",
    headerName: "Name",
    width: 150,
    editable: true,
  },
  {
    field: "address",
    headerName: "Address",
    width: 150,
    editable: true,
  },
  {
    field: "phoneNumber",
    headerName: "Phone Number",
    width: 150,
    editable: true,
  },
  {
    field: "brn",
    headerName: "BRN",
    width: 150,
    editable: true,
  },
  {
    field: "rating",
    headerName: "Rating",
    width: 150,
  },
  {
    field: "copies",
    headerName: "Copies",
    width: 150,
    editable: true,
  },
  {
    field: "description",
    headerName: "Description",
    width: 150,
    editable: true,
  },
  {
    field: "bookstorePic",
    headerName: "Bookstore Pic",
    width: 150,
    editable: true,
  },
];

const rows = [
  {
    id: 1,
    vendorID: 1,
    name: "Bookstore 1",
    address: "Address 1",
    phoneNumber: "12345678",
    brn: "12345678",
    rating: 1,
    copies: 1,
    description: "Description 1",
    bookstorePic: "Bookstore Pic 1",
  },
  {
    id: 2,
    vendorID: 2,
    name: "Bookstore 2",
    address: "Address 2",
    phoneNumber: "12345678",
    brn: "12345678",
    rating: 2,
    copies: 2,
    description: "Description 2",
    bookstorePic: "Bookstore Pic 2",
  },
  {
    id: 3,
    vendorID: 3,
    name: "Bookstore 3",
    address: "Address 3",
    phoneNumber: "12345678",
    brn: "12345678",
    rating: 3,
    copies: 3,
    description: "Description 3",
    bookstorePic: "Bookstore Pic 3",
  },
];

export default function BookstoresDataGrid() {
  const [showForm, setShowForm] = React.useState(false);

  // Function to toggle the state variable
  const toggleForm = () => {
    setShowForm(!showForm);
  };

  return (
    <>
      <Box
        sx={{
          width: "100%",
          "& .super-app-theme--header": {
            backgroundColor: "rgba(255, 7, 0, 0.55)",
          },
        }}
      >
        {" "}
        <Stack direction="row" spacing={1}>
          {/* Add onClick event to "Add BookStore" button */}
          <Button size="small" onClick={toggleForm}>
            Add BookStore
          </Button>
          <Button size="small" onClick={null}>
            Delete BookStore
          </Button>
        </Stack>
        <Box>
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
            checkboxSelection
            disableRowSelectionOnClick
          />
        </Box>
        {/* Conditionally render the form component */}
        {/* {showForm && <BookstoreForm />} */}
        <BookstoreForm
          open={showForm}
          onClose={toggleForm}
          onSubmit={handleFormSubmit}
        />
      </Box>
    </>
  );
}
