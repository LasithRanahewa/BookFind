import React, { useState } from "react";
import {
  Autocomplete,
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import Navbar from "../../components/bookfind-components/Navbar";

const UserProfile = () => {
  const [username, setUsername] = useState("JohnDoe");
  const [email, setEmail] = useState("johndoe@example.com");
  const [password, setPassword] = useState("password");
  const [address, setAddress] = useState("123 Main St, Anytown USA");
  const [preferences, setPreferences] = useState([]);
  const [isEditingUsername, setIsEditingUsername] = useState(false);
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [isEditingPassword, setIsEditingPassword] = useState(false);
  const [isEditingAddress, setIsEditingAddress] = useState(false);
  const [isEditingProfilePicture, setIsEditingProfilePicture] = useState(false);
  const [isConfirmationDialogOpen, setIsConfirmationDialogOpen] =
    useState(false);
  const [profilePicture, setProfilePicture] = useState(null);

  const preferencesOptions = [
    "Fiction",
    "Non-fiction",
    "Mystery",
    "Thriller",
    "Romance",
    "Sci-fi",
    "Fantasy",
  ];

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handlePreferencesChange = (event, value) => {
    setPreferences(value);
  };

  const handleEditUsernameClick = () => {
    setIsEditingUsername(true);
  };

  const handleEditEmailClick = () => {
    setIsEditingEmail(true);
  };

  const handleEditPasswordClick = () => {
    setIsEditingPassword(true);
  };

  const handleEditAddressClick = () => {
    setIsEditingAddress(true);
  };

  const handleEditProfilePictureClick = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = (event) => {
      setProfilePicture(event.target.files[0]);
    };
    input.click();
  };

  const handleProfilePictureChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target.result;
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const MAX_WIDTH = 250;
        const MAX_HEIGHT = 250;
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > MAX_WIDTH) {
            height *= MAX_WIDTH / width;
            width = MAX_WIDTH;
          }
        } else {
          if (height > MAX_HEIGHT) {
            width *= MAX_HEIGHT / height;
            height = MAX_HEIGHT;
          }
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0, width, height);
        canvas.toBlob((blob) => {
          setProfilePicture(blob);
        }, file.type);
      };
    };
  };

  const handleDeselectProfilePictureClick = () => {
    setProfilePicture(null);
  };

  const handleSaveChangesClick = () => {
    setIsConfirmationDialogOpen(true);
  };

  const shouldShowSaveButton =
    isEditingUsername ||
    isEditingEmail ||
    isEditingPassword ||
    isEditingAddress ||
    preferences.length > 0 ||
    profilePicture !== null;

  const handleConfirmationDialogClose = () => {
    setIsConfirmationDialogOpen(false);
  };

  const handleConfirmSaveChanges = (field, value, setter) => {
    setter(value);
    setIsConfirmationDialogOpen(false);
    switch (field) {
      case "username":
        setIsEditingUsername(false);
        break;
      case "email":
        setIsEditingEmail(false);
        break;
      case "password":
        setIsEditingPassword(false);
        break;
      case "address":
        setIsEditingAddress(false);
        break;
      default:
        break;
    }
  };


  return (
    <>
      <Navbar />

      <Paper
        sx={{
          p: 5, m: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h6" gutterBottom>
          {username}
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <div style={{ display: "flex", justifyContent: "center" }}>
                        <img
                          src={
                            profilePicture
                              ? URL.createObjectURL(profilePicture)
                              : "https://via.placeholder.com/250"
                          }
                          alt="Profile"
                          style={{ cursor: "default", objectFit: "cover", width: "150px", height: "150px" }}
                        />
                      </div>
                      {isEditingProfilePicture && (
                        <div>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handleProfilePictureChange}
                          />
                          {profilePicture && (
                            <Button onClick={handleDeselectProfilePictureClick}>
                              Deselect
                            </Button>
                          )}
                        </div>
                      )}
                      {!isEditingProfilePicture && (
                        <Button onClick={handleEditProfilePictureClick}>Edit</Button>
                      )}
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        label="Username"
                        variant="outlined"
                        fullWidth
                        value={username}
                        onChange={handleUsernameChange}
                        disabled={!isEditingUsername}
                      />
                      {!isEditingUsername && (
                        <Button onClick={handleEditUsernameClick}>Edit</Button>
                      )}
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        label="Email"
                        variant="outlined"
                        fullWidth
                        value={email}
                        onChange={handleEmailChange}
                        disabled={!isEditingEmail}
                      />
                      {!isEditingEmail && (
                        <Button onClick={handleEditEmailClick}>Edit</Button>
                      )}
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        label="Password"
                        variant="outlined"
                        fullWidth
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                        disabled={!isEditingPassword}
                      />
                      {!isEditingPassword && (
                        <Button onClick={handleEditPasswordClick}>Edit</Button>
                      )}
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <TextField
                        label="Address"
                        variant="outlined"
                        fullWidth
                        value={address}
                        onChange={handleAddressChange}
                        disabled={!isEditingAddress}
                      />
                      {!isEditingAddress && (
                        <Button onClick={handleEditAddressClick}>Edit</Button>
                      )}
                    </Grid>

                    <Grid item xs={12} md={6}>
                      <Autocomplete
                        multiple
                        options={preferencesOptions}
                        value={preferences}
                        onChange={handlePreferencesChange}
                        renderTags={(value, getTagProps) =>
                          value.map((option, index) => (
                            <Chip
                              key={index}
                              label={option}
                              {...getTagProps({ index })}
                            />
                          ))
                        }
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            variant="outlined"
                            label="Preferences"
                            placeholder="Select preferences"
                          />
                        )}
                      />
                    </Grid>
                  </Grid>
                  {shouldShowSaveButton && (
                    <Button onClick={handleSaveChangesClick}>Save Changes</Button>
                  )}
                </Paper>

                <Dialog
                  open={isConfirmationDialogOpen}
                  onClose={handleConfirmationDialogClose}
                >
                  <DialogTitle>Confirmation</DialogTitle>
                  <DialogContent>
                    <Typography>Are you sure you want to save changes?</Typography>
                  </DialogContent>
                  <DialogActions>
                    <Button onClick={handleConfirmationDialogClose}>Cancel</Button>
                    {isEditingUsername && (
                      <Button
                        onClick={() =>
                          handleConfirmSaveChanges("username", username, setUsername)
                        }
                      >
                        Save
                      </Button>
                    )}
                    {isEditingEmail && (
                      <Button
                        onClick={() => handleConfirmSaveChanges("email", email, setEmail)}
                      >
                        Save
                      </Button>
                    )}
                    {isEditingPassword && (
                      <Button
                        onClick={() =>
                          handleConfirmSaveChanges("password", password, setPassword)
                        }
                      >
                        Save
                      </Button>
                    )}
                    {isEditingAddress && (
                      <Button
                        onClick={() =>
                          handleConfirmSaveChanges("address", address, setAddress)
                        }
                      >
                        Save
                      </Button>
                    )}
                    {preferences.length > 0 && (
                      <Button onClick={() => setIsConfirmationDialogOpen(false)}>
                        Save
                      </Button>
                    )}
                    {profilePicture && (
                      <Button onClick={() => setIsConfirmationDialogOpen(false)}>
                        Save
                      </Button>
                    )}
                  </DialogActions>
                </Dialog>
              </>
            );
          };
          export default UserProfile;
