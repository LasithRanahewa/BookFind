import * as React from "react";
import axios from "axios";
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
  const [location, setLocation] = React.useState("");
  const [email, setEmail] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .create({
        withCredentials: true,
        baseURL: "http://localhost:8080/api",
      })
      .post("/vendor/new", {
        name,
        location,
        email,
      })
      .then((obj) => {
        onClose();
        setSelectedForDelete(null);
        handleDataFetch();
      })
      .catch(() => {
        // Handle errors here
      });
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
            label="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
  // console.log(formData);
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
    field: "location",
    headerName: "Location",
    width: 150,
    editable: true,
  },
  {
    field: "email",
    headerName: "Email",
    width: 150,
    editable: true,
  },
  // {
  //   field: "brn",
  //   headerName: "BRN",
  //   width: 150,
  //   editable: true,
  // },
  // {
  //   field: "rating",
  //   headerName: "Rating",
  //   width: 150,
  // },
  // {
  //   field: "copies",
  //   headerName: "Copies",
  //   width: 150,
  //   editable: true,
  // },
  // {
  //   field: "description",
  //   headerName: "Description",
  //   width: 150,
  //   editable: true,
  // },
  // {
  //   field: "bookstorePic",
  //   headerName: "Bookstore Pic",
  //   width: 150,
  //   editable: true,
  // },
];

// const rows = [
//   {
//     id: 1,
//     vendorID: 1,
//     name: "Bookstore 1",
//     address: "Address 1",
//     phoneNumber: "12345678",
//     brn: "12345678",
//     rating: 1,
//     copies: 1,
//     description: "Description 1",
//     bookstorePic: "Bookstore Pic 1",
//   },
//   {
//     id: 2,
//     vendorID: 2,
//     name: "Bookstore 2",
//     address: "Address 2",
//     phoneNumber: "12345678",
//     brn: "12345678",
//     rating: 2,
//     copies: 2,
//     description: "Description 2",
//     bookstorePic: "Bookstore Pic 2",
//   },
//   {
//     id: 3,
//     vendorID: 3,
//     name: "Bookstore 3",
//     address: "Address 3",
//     phoneNumber: "12345678",
//     brn: "12345678",
//     rating: 3,
//     copies: 3,
//     description: "Description 3",
//     bookstorePic: "Bookstore Pic 3",
//   },
// ];

export default function BookstoresDataGrid({ instance }) {
  const [showForm, setShowForm] = React.useState(false);
  const [location, setLocation] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [selectedRows, setSelectedRows] = React.useState([]); // Define selectedRows here
  const [selectionModel, setSelectionModel] = React.useState([]);
  const [selectedRowIds, setSelectedRowIds] = React.useState([]);
  const [vendorList, setVendorList] = React.useState([]);
  const [selectedForDelete, setSelectedForDelete] = React.useState([]);

  // Function to toggle the state variable
  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleDataFetch = () => {
    var id = 1;
    instance
      .get("/vendor/all")
      .then((obj) => {
        // Rename the _id property to id using map
        const renamedVendorList = obj.data.map((vendor) => ({
          ...vendor,
          id: id++,
        }));
        setVendorList(renamedVendorList);
      })
      .catch(() => {
        setVendorList([
          {
            error: "Fetch error",
          },
        ]);
      });
  };

  
  // const handleSelectionChange = (newSelection) => {
  //   setSelectionModel(newSelection);

  //   // Get the selected IDs
  //   const selectedIds = newSelection.map((index) => rows[index]?.id || "");
  //   setSelectedRowIds(selectedIds);
  // };

  const handleDelete = (data) => {
    axios
      .create({
        withCredentials: true,
        baseURL: "http://localhost:8080/api",
      })
      .post("/vendor/delete", {
        data,
      })
      .then((obj) => {
        console.log("Deleted Vendor");
        onClose();
        setSelectedForDelete(null);
      })
      .catch(() => {
        // Handle errors here
      });
  };
  const handleCheckBoxSelection = (ids) => {
    const selectedRowsData = ids.map((id) =>
      vendorList.find((row) => row.id === id)
    );

    var arr = selectedRowsData;
    setSelectedForDelete(arr);
  };


  React.useEffect(() => {
    handleDataFetch();
  }, [vendorList,selectedForDelete]);


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
          <Button
            size="small"
            onClick={() => {
              handleDelete(selectedForDelete);
            }}
          >
            Delete BookStore
          </Button>
        </Stack>
        <Box>
          <DataGrid
            rows={vendorList}
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
            onRowSelectionModelChange={(id) => handleCheckBoxSelection(id)}
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
