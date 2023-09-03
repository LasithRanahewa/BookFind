import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Navbar from "../../components/bookfind-components/Navbar";
import { Grid, Paper, Typography } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import Chip from "@mui/material/Chip";

const preferencesOptions = [
  "Action",
  "Adventure",
  "Comedy",
  "Drama",
  "Fantasy",
  "Horror",
  "Mystery",
  "Romance",
  "Sci-Fi",
  "Thriller",
];

const UserProfile = () => {
  const [username, setUsername] = useState("johndoe");
  const [email, setEmail] = useState("johndoe@example.com");
  const [password, setPassword] = useState("password");
  const [address, setAddress] = useState("");
  const [preferences, setPreferences] = useState([]);
  const [isEditingUsername, setIsEditingUsername] = useState(false);
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [isEditingPassword, setIsEditingPassword] = useState(false);
  const [isEditingAddress, setIsEditingAddress] = useState(false);
  const [isEditingProfilePicture, setIsEditingProfilePicture] = useState(false);
  const [isConfirmationDialogOpen, setIsConfirmationDialogOpen] = useState(
    false
  );

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
    setIsEditingProfilePicture(true);
  };

  const handleSaveChangesClick = () => {
    setIsEditingUsername(false);
    setIsEditingEmail(false);
    setIsEditingPassword(false);
    setIsEditingAddress(false);
    setIsEditingProfilePicture(false);
    setIsConfirmationDialogOpen(true);
  };

  const handleConfirmationDialogClose = () => {
    setIsConfirmationDialogOpen(false);
  };

  return (
    <>
      <Navbar />
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={12} md={4} >
        <Paper sx={{ p: 2, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Typography variant="h6" gutterBottom>
              Profile Picture
            </Typography>
            <img
              src="https://via.placeholder.com/150"
              alt="Profile"
              style={{ cursor: "pointer" }}
              onClick={handleEditProfilePictureClick}
            />
            {isEditingProfilePicture && (
              <div>
                <input type="file" />
                <Button onClick={handleSaveChangesClick}>Save</Button>
              </div>
            )}
            {!isEditingProfilePicture && (
              <Button onClick={handleEditProfilePictureClick}>Edit</Button>
            )}
          </Paper>
        </Grid>
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              User Information
            </Typography>
            <Grid container spacing={2}>
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
            {(isEditingUsername ||
              isEditingEmail ||
              isEditingPassword ||
              isEditingAddress ||
              preferences.length > 0) && (
              <Button onClick={handleSaveChangesClick}>Save Changes</Button>
            )}
          </Paper>
        </Grid>
      </Grid>
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
          <Button onClick={handleConfirmationDialogClose}>Save</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default UserProfile;