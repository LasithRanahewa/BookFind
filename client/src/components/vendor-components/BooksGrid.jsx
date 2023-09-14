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
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

function BookForm({ open, onClose, onSubmit }) {
  const [name, setName] = React.useState("");
  const [isbn, setISBN] = React.useState("");
  const [author, setAddress] = React.useState("");
  const [publisher, setPublisher] = React.useState("");
  const [clicks, setClicks] = React.useState(0);
  const [description, setDescription] = React.useState("");
  const [noOfPages, setNoOfPages] = React.useState(1);
  const [rating, setRating] = React.useState(0);

  // const [copies, setCopies] = React.useState(1);
  const [categories, setCategories] = React.useState([]);
  const [image, setImage] = React.useState();
  const [publishedDate, setPublishedDate] = React.useState("");
  // const [unitPrice, setUnitPrice] = React.useState(1);
  const [imageName, setImageName] = React.useState("");

  const VisuallyHiddenInput = styled("input")`
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    bottom: 0;
    left: 0;
    white-space: nowrap;
    width: 1px;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({
      name,
      author,
      isbn,
      publisher,
      description,
      noOfPages,
      image,
      publishedDate,
      categories,
      // copies,
      publisher,
      // unitPrice,
      rating,
      image: imageName,
    });
    onClose();
  };

  const handleAddBook = () => {
    axios
      .create({
        withCredentials: true,
        baseURL: "http://localhost:8080/api",
      })
      .post("/book/new", {
        name,
        author,
        publisher,
        description,
        image: imageName,
        rating,
      })
      .then((obj) => {
        console.log("Book Added");
        handleDataFetch();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const [selectedFile, setSelectedFile] = React.useState(null);
  const handleFileChange = async (e) => {
    e.preventDefault();

    const file = e.target.files[0];

    if (file) {
      const formData = new FormData();
      formData.append("image", file);

      try {
        // Replace 'your-backend-url' with the actual URL of your backend API endpoint.
        const response = await axios.post(
          "http://localhost:8080/api/upload",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        setImageName(response.data[0].filename, () => {
          console.log("Image uploaded successfully:", imageName);
        });
        console.log(response.data[0].filename);
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add Book</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <div>
            <span>Select Book Image here</span>{" "}
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                e.preventDefault();
                handleFileChange(e);
              }}
            />
          </div>
          <TextField
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Author"
            value={author}
            onChange={(e) => setAddress(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Publisher"
            value={publisher}
            onChange={(e) => setPublisher(e.target.value)}
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
          <TextField
            label="No of Pages"
            value={noOfPages}
            onChange={(e) => setNoOfPages(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            fullWidth
            margin="normal"
          />
          {/* <TextField
            label="Book Picture"
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
            onChange={(e) => setBookPic(e.target.value)}
            type="file"
            fullWidth
            margin="normal"
          /> */}
          {/* <TextField
            label="Publish Date"
            value={publishedDate}
            onChange={(e) => setPublishDate(e.target.value)}
            fullWidth
            margin="normal"
          /> */}
          <TextField
            label="Categories"
            value={categories}
            onChange={(e) => setCategories(e.target.value)}
            fullWidth
            margin="normal"
          />
          {/* <TextField
            label="Copies"
            value={copies}
            onChange={(e) => setCopies(e.target.value)}
            fullWidth
            margin="normal"
          /> */}
          <DialogActions>
            <Button onClick={onClose}>Cancel</Button>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              onClick={() => handleAddBook()}
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
    editable: true,
  },
  {
    field: "author",
    headerName: "Author",
    width: 250,
    editable: true,
  },
  {
    field: "publisher",
    headerName: "Publisher",
    width: 250,
    editable: true,
  },
  {
    field: "clicks",
    headerName: "Clicks",
    width: 150,
  },
  {
    field: "description",
    headerName: "Description",
    width: 400,
    editable: true,
  },
  {
    field: "isbn",
    headerName: "ISBN",
    width: 250,
  },
  {
    field: "noOfPages",
    headerName: "No of Pages",
    width: 250,
  },
  {
    field: "rating",
    headerName: "Rating",
    width: 250,
  },
  {
    field: "image",
    headerName: "Image",
    width: 250,
    editable: true,
  },
  // {
  //   field: "publishedDate",
  //   headerName: "Published Date",
  //   width: 250,
  //   editable: true,
  // },
  {
    field: "categories",
    headerName: "Categories",
    width: 250,
    editable: true,
  },
];

const handleFormSubmit = (formData) => {
  // Here you can handle the form data however you need to, such as sending it to a server or updating state
  console.log(formData);
};

export default function BooksGrid() {
  const [showForm, setShowForm] = React.useState(false);
  const [bookList, setBookList] = React.useState([]);
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
      .get("/book/all")
      .then((obj) => {
        // console.log(obj);
        // Rename the _id property to id using map
        const renamedBookList = obj.data.map((book) => ({
          ...book,
          id: id++,
        }));
        console.log(renamedBookList);
        setBookList(renamedBookList);
      })
      .catch(() => {
        setBookList([
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
      .post("/book/delete", {
        data,
      })
      .then((obj) => {
        console.log("Deleted Vendor");
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
      bookList.find((row) => row.id === id)
    );

    var arr = selectedRowsData;
    setSelectedForDelete(arr);
  };

  React.useEffect(() => {
    handleDataFetch();
  }, [bookList, selectedForDelete]);

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
            Add Book
          </Button>
          <Button
            size="small"
            onClick={() => {
              handleDelete(selectedForDelete);
            }}
          >
            Delete Book
          </Button>
        </Stack>
        <Box>
          <DataGrid
            rows={bookList}
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
            // disableRowSelectionOnClick
          />
        </Box>
        {/* Conditionally render the form component */}
        {/* {showForm && <BookstoreForm />} */}
        <BookForm
          open={showForm}
          onClose={toggleForm}
          onSubmit={handleFormSubmit}
        />
      </Box>
    </>
  );
}
