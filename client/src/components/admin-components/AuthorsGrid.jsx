import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import Stack from "@mui/material/Stack";
import axios from "axios";
import { Typography } from "@mui/material";

function AuthorForm({ open, onClose, onSubmit }) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [contactNo, setContactNo] = React.useState("");
  const [image, setImage] = React.useState("");
  const [imageName, setImageName] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({
      name,
      email,
      description,
      contactNo,
      image: imageName,
    });
    onClose();
  };

  const handleAddAuthor = () => {
    console.log(name, email, description, contactNo, image);
    axios
      .create({
        withCredentials: true,
        baseURL: "http://localhost:8080/api",
      })
      .post("/author/new", {
        name,
        email,
        description,
        contactNo,
        image: imageName,
      })
      .then((obj) => {
        console.log("Author Added");
        handleDataFetch();
      })
      .catch((e) => {
        console.log(e);
      }
      );
  };

  

  // const handleAddBook = () => {
  //   axios
  //     .create({
  //       withCredentials: true,
  //       baseURL: "http://localhost:8080/api",
  //     })
  //     .post("/book/new", {
  //       name,
  //       author,
  //       publisher,
  //       description,
  //     })
  //     .then((obj) => {
  //       console.log("Book Added");
  //       handleDataFetch();
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add Author</DialogTitle>
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
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Mobile No"
            value={contactNo}
            onChange={(e) => setContactNo(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            fullWidth
            margin="normal"
          />
          {/* <TextField
            label="Author Image"
            value={image}
            sx={{
              // margin: "8px",
              // width: "60%",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  // borderColor: "#27496D",
                  borderWidth: "0.1rem",
                },
                "&:hover fieldset": {
                  // borderColor: "#27496D",
                },
                "&.Mui-focused fieldset": {
                  // borderColor: "#27496D",
                },
              },
              "& .MuiFormLabel-root": {
                // color: "#27496D",
              },
              "& .MuiInputBase-input": {
                // color: "#27496D",
              },
              "& .MuiInputBase-input[type=file]": {
                position: "relative",
                width: "100%",
                height: "100%",
                opacity: "0",
                zIndex: "2",
              },
              "& .MuiInputBase-root": {
                position: "relative",
                width: "100%",
                height: "100%",
                zIndex: "1",
              },
              "& .MuiInputBase-root::before": {
                // color: "#27496D",
                // content: '"Choose File"',
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: "0",
              },
            }}
            onChange={(e) => setAuthorPic(e.target.value)}
            type="file"
            fullWidth
            margin="normal"
          /> */}
          <DialogActions>
            <Button onClick={onClose}>Cancel</Button>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              onClick={() => handleAddAuthor()}
            >
              Add
            </Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
}

const columns = [
  {
    field: "id",
    headerName: "Index",
    width: 150,
  },
  {
    field: "name",
    headerName: "Name",
    width: 250,
  },
  {
    field: "email",
    headerName: "Email",
    width: 250,
  },
  {
    field: "description",
    headerName: "Description",
    width: 250,
  },
  {
    field: "contactNo",
    headerName: "Contact No",
    width: 250,
  },
  // {
  //   field: "image",
  //   headerName: "Admin Image",
  //   width: 250,
  // }

  
];

const handleFormSubmit = (formData) => {
  // Here you can handle the form data however you need to, such as sending it to a server or updating state
  console.log(formData);
};

export default function AuthorsGrid() {
  const [showForm, setShowForm] = React.useState(false);
  const [authorList, setAuthorList] = React.useState([]);
  const [selectedForDelete, setSelectedForDelete] = React.useState([]);

  // Function to toggle the state variable
  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const handleDataFetch = () => {
    var id = 1;
    axios
      .create({
        withCredentials: true,
        baseURL: "http://localhost:8080/api",
      })
      .get("/author/all")
      .then((obj) => {
        // Rename the _id property to id using map
        const renamedAuthorList = obj.data.map((author) => ({
          ...author,
          id: id++, // This is assigning an incremental id
        }));
        console.log(renamedAuthorList);
        setAuthorList(renamedAuthorList);
      })
      .catch(() => {
        setAuthorList([
          {
            error: "Fetch error",
          },
        ]);
      });
  };
  


  const handleDelete = (data) => {
    axios
      .create({
        withCredentials: true,
        baseURL: "http://localhost:8080/api",
      })
      .post("/author/delete", {
        data,
      })
      .then((obj) => {
        console.log("Deleted Author");
        onClose();
        setSelectedForDelete(null);
        handleDataFetch();
      })
      .catch(() => {
        // Handle errors here
      });
  };

  const handleCheckBoxSelection = (ids) => {
    const selectedRowsData = ids.map((id) =>
      authorList.find((row) => row.id === id)
    );

    var arr = selectedRowsData;
    setSelectedForDelete(arr);
  };

  React.useEffect(() => {
    handleDataFetch();
  }, [authorList, selectedForDelete]);

  return (
    <>
      {/* <Typography variant="h4" sx={{ textAlign: "center" }}>Books</Typography> */}
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
            Add Author
          </Button>
          <Button
            size="small"
            onClick={() => {
              handleDelete(selectedForDelete);
            }}
          >
            Delete Author
          </Button>
        </Stack>
        <Box>
          <DataGrid
            rows={authorList}
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
        <AuthorForm
          open={showForm}
          onClose={toggleForm}
          onSubmit={handleFormSubmit}
        />
      </Box>
    </>
  );
}
