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

function BookForm({ open, onClose, onSubmit }) {
  const [name, setName] = React.useState("");
  const [author, setAddress] = React.useState("");
  const [isbn, setISBN] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [noOfPages, setNoOfPages] = React.useState(1);
  const [bookPic, setBookPic] = React.useState("");
  const [publishDate, setPublishDate] = React.useState("");
  const [categories, setCategories] = React.useState([]);
  const [publisher, setPublisher] = React.useState("");
  const [copies, setCopies] = React.useState(1);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({
      name,
      author,
      isbn,
      publisher,
      description,
      noOfPages,
      bookPic,
      publishDate,
      categories,
      copies,
      publisher,
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
      })
      .then((obj) => {
        console.log("Book Added");
        handleDataFetch();
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add Book</DialogTitle>
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
            label="Author"
            value={author}
            onChange={(e) => setAddress(e.target.value)}
            fullWidth
            margin="normal"
          />
          {/* <TextField
            label="publisher"
            value={isbn}
            onChange={(e) => setISBN(e.target.value)}
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
            label="Book Picture"
            value={bookPic}
            onChange={(e) => setBookPic(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Publish Date"
            value={publishDate}
            onChange={(e) => setPublishDate(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Categories"
            value={categories}
            onChange={(e) => setCategories(e.target.value)}
            fullWidth
            margin="normal"
          /> */}
          <TextField
            label="Publisher"
            value={publisher}
            onChange={(e) => setPublisher(e.target.value)}
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
  // {
  //   field: "bookID",
  //   headerName: "ID",
  //   width: 150,
  // },
  {
    field: "name",
    headerName: "Name",
    width: 150,
  },
  {
    field: "author",
    headerName: "Author",
    width: 150,
  },
  // {
  //   field: "isbn",
  //   headerName: "ISBN",
  //   width: 150,
  // },
  // {
  //   field: "brn",
  //   headerName: "BRN",
  //   width: 150,
  // },
  // {
  //   field: "rating",
  //   headerName: "Rating",
  //   width: 150,
  // },
  // {
  //   field: "categories",
  //   headerName: "Categories",
  //   width: 150,
  // },
  {
    field: "publisher",
    headerName: "Publisher",
    width: 150,
  },
  // {
  //   field: "description",
  //   headerName: "Description",
  //   width: 150,
  // },
  // {
  //   field: "noOfPages",
  //   headerName: "No Of Pages",
  //   width: 150,
  // },
  // {
  //   field: "publishDate",
  //   headerName: "Publish Date",
  //   width: 150,
  // },
  // {
  //   field: "bookPic",
  //   headerName: "Book Pic",
  //   width: 150,
  // },
  // {
  //   field: "unitPrice",
  //   headerName: "Unit Price",
  //   width: 150,
  // },
  // {
  //   field: "copies",
  //   headerName: "Copies",
  //   width: 150,
  // },
];

const rows = [
  {
    id: 1,
    bookID: 1,
    name: "Book 1",
    author: "Author 1",
    isbn: "12345678",
    brn: "12345678",
    rating: 1,
    categories: "Category 1",
    publisher: "Publisher 1",
    description: "Description 1",
    noOfPages: 1,
    publishDate: "2021-10-10",
    bookPic: "Book Pic 1",
    unitPrice: 1,
    copies: 1,
  },
  {
    id: 2,
    bookID: 2,
    name: "Book 2",
    author: "Author 2",
    isbn: "12345678",
    brn: "12345678",
    rating: 2,
    categories: "Category 2",
    publisher: "Publisher 2",
    description: "Description 2",
    noOfPages: 2,
    publishDate: "2021-10-10",
    bookPic: "Book Pic 2",
    unitPrice: 2,
    copies: 2,
  },
  {
    id: 3,
    bookID: 3,
    name: "Book 3",
    author: "Author 3",
    isbn: "12345678",
    brn: "12345678",
    rating: 3,
    categories: "Category 3",
    publisher: "Publisher 3",
    description: "Description 3",
    noOfPages: 3,
    publishDate: "2021-10-10",
    bookPic: "Book Pic 3",
    unitPrice: 3,
    copies: 3,
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
        // console.log("hi",renamedBookList)
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
            disableRowSelectionOnClick
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
