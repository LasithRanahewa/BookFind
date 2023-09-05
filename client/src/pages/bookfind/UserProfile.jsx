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
  InputAdornment,
  Paper,
  TextField,
  Typography,
  IconButton,
} from "@mui/material";
import Navbar from "../../components/bookfind-components/Navbar";
import { styled } from "@mui/material/styles";
import EditIcon from "@mui/icons-material/Edit";

const TextFieldWrapper = styled(TextField)({
  // margin: "8px",
  // width: "60%",

  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#27496D",
      borderWidth: "0.1rem",
    },
    "&:hover fieldset": {
      borderColor: "#27496D",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#27496D",
    },
  },
  "& .MuiFormLabel-root": {
    color: "#27496D",
  },
  "& .MuiInputBase-input": {
    color: "#27496D",
  },
});

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

  // const handleSaveChangesClick = () => {
  //   setIsConfirmationDialogOpen(true);
  // };

  const shouldShowSaveButton =
    isEditingUsername ||
    isEditingEmail ||
    isEditingPassword ||
    isEditingAddress ||
    preferences.length > 0 ||
    profilePicture !== null;

  const handleSaveChangesClick = () => {
    setIsConfirmationDialogOpen(true);
  };

  const handleConfirmationDialogClose = () => {
    setIsConfirmationDialogOpen(false);
  };

  const handleConfirmAllChanges = () => {
    setIsConfirmationDialogOpen(false);
    if (isEditingUsername) {
      handleConfirmSaveChanges("username", username, setUsername);
    }
    if (isEditingEmail) {
      handleConfirmSaveChanges("email", email, setEmail);
    }
    if (isEditingPassword) {
      handleConfirmSaveChanges("password", password, setPassword);
    }
    if (isEditingAddress) {
      handleConfirmSaveChanges("address", address, setAddress);
    }
    if (preferences.length > 0) {
      setPreferences(preferences);
    }
    if (profilePicture) {
      setProfilePicture(profilePicture);
    }
    setIsEditingUsername(false);
    setIsEditingEmail(false);
    setIsEditingPassword(false);
    setIsEditingAddress(false);
  };

  const handleConfirmSaveChanges = (fieldName, fieldValue, setField) => {
    setField(fieldValue);
    console.log(`Changes to ${fieldName} saved successfully!`);
  };

  return (
    <>
      <Navbar />

      <Paper
        sx={{
          p: 5,
          m: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#DAE1E7",
        }}
      >
        <Typography variant="h4" gutterBottom color={"#27496D"}>
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
                style={{
                  cursor: "default",
                  objectFit: "cover",
                  width: "250px",
                  height: "250px",
                  borderRadius: "50%",
                  marginBottom: "1rem",
                }}
              />
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <TextFieldWrapper
              label="Username"
              variant="outlined"
              fullWidth
              value={username}
              onChange={handleUsernameChange}
              disabled={!isEditingUsername}
              InputProps={{
                endAdornment: (
                  <>
                    {!isEditingUsername && (
                      <Button onClick={handleEditUsernameClick}>
                        <IconButton style={{ color: "#27496D" }}>
                          <EditIcon />
                        </IconButton>
                      </Button>
                    )}
                  </>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextFieldWrapper
              label="Email"
              variant="outlined"
              fullWidth
              value={email}
              onChange={handleEmailChange}
              disabled={!isEditingEmail}
              InputProps={{
                endAdornment: (
                  <>
                    {!isEditingEmail && (
                      <Button onClick={handleEditEmailClick}>
                        <IconButton style={{ color: "#27496D" }}>
                          <EditIcon />
                        </IconButton>
                      </Button>
                    )}
                  </>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextFieldWrapper
              label="Password"
              variant="outlined"
              fullWidth
              type="password"
              value={password}
              onChange={handlePasswordChange}
              disabled={!isEditingPassword}
              InputProps={{
                endAdornment: (
                  <>
                    {!isEditingPassword && (
                      <Button onClick={handleEditPasswordClick}>
                         <IconButton style={{ color: "#27496D" }}>
                          <EditIcon />
                        </IconButton>
                      </Button>
                    )}
                  </>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <TextFieldWrapper
              label="Address"
              variant="outlined"
              fullWidth
              value={address}
              onChange={handleAddressChange}
              disabled={!isEditingAddress}
              InputProps={{
                endAdornment: (
                  <>
                    {!isEditingAddress && (
                      <Button onClick={handleEditAddressClick}>
                        <IconButton style={{ color: "#27496D" }}>
                          <EditIcon />
                        </IconButton>
                      </Button>
                    )}
                  </>
                ),
              }}
            />
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

          <Grid
            item
            xs={12}
            md={6}
            style={{ display: "flex", justifyContent: "center" }}
          >
                    {isEditingProfilePicture && (
                      <div>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleProfilePictureChange}
                        />
                        {profilePicture && (
                          <Button onClick={handleDeselectProfilePictureClick} style={{ color: "#27496D" }}>
                            Deselect
                          </Button>
                        )}
                      </div>
                    )}
                    {!isEditingProfilePicture && (
                      <Button onClick={handleEditProfilePictureClick} style={{ color: "#27496D" }}>
                        Change Profile Picture
                      </Button>
                    )}
                  </Grid>
                </Grid>
                {shouldShowSaveButton && (
                  <Button onClick={handleSaveChangesClick} style={{ color: "#27496D", marginTop:"1rem"}}>
                    Save Changes
                  </Button>
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
                  <Button onClick={handleConfirmationDialogClose} style={{ color: "#27496D" }}>
                    Cancel
                  </Button>
                  <Button onClick={handleConfirmAllChanges} style={{ color: "#27496D"}}>
                    Save
                  </Button>
                </DialogActions>
              </Dialog>
            </>
  );
};
export default UserProfile;
