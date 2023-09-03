import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import { Grid, Paper, Typography } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import Chip from "@mui/material/Chip";
import { useDropzone } from "react-dropzone";

const VendorProfile = () => {
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("johndoe@example.com");
  const [password, setPassword] = useState("password");
  const [address, setAddress] = useState("123 Main St, Anytown USA");
  const [phone, setPhone] = useState("555-555-5555");
  const [brn, setBrn] = useState("123456789");
  const [description, setDescription] = useState(
    "We sell the best books in town!"
  );
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [isEditingPassword, setIsEditingPassword] = useState(false);
  const [isEditingPhone, setIsEditingPhone] = useState(false);
  const [isEditingDescription, setIsEditingDescription] = useState(false);
  const [isEditingProfilePicture, setIsEditingProfilePicture] = useState(false);
  const [isConfirmationDialogOpen, setIsConfirmationDialogOpen] = useState(
    false
  );
  const [profilePicture, setProfilePicture] = useState(
    "https://via.placeholder.com/150"
  );

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleEditEmailClick = () => {
    setIsEditingEmail(true);
  };

  const handleEditPasswordClick = () => {
    setIsEditingPassword(true);
  };

  const handleEditPhoneClick = () => {
    setIsEditingPhone(true);
  };

  const handleEditDescriptionClick = () => {
    setIsEditingDescription(true);
  };

  const handleEditProfilePictureClick = () => {
    setIsEditingProfilePicture(true);
  };

  const handleSaveChangesClick = () => {
    setIsEditingEmail(false);
    setIsEditingPassword(false);
    setIsEditingPhone(false);
    setIsEditingDescription(false);
    setIsEditingProfilePicture(false);
    setIsConfirmationDialogOpen(true);
  };

  const handleConfirmationDialogClose = () => {
    setIsConfirmationDialogOpen(false);
  };

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.onload = () => {
      setProfilePicture(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Grid item xs={12}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              Vendor Information
            </Typography>
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              {isDragActive ? (
                <Typography>Drop the files here ...</Typography>
              ) : (
                <img
                  src={profilePicture}
                  alt="Profile"
                  style={{ cursor: "pointer" }}
                  onClick={handleEditProfilePictureClick}
                />
              )}
            </div>
            {isEditingProfilePicture && (
              <div>
                <input type="file" onChange={(e) => onDrop(e.target.files)} />
                <Button onClick={handleSaveChangesClick}>Save</Button>
              </div>
            )}
            {!isEditingProfilePicture && (
              <Button onClick={handleEditProfilePictureClick}>Edit</Button>
            )}
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Name"
                  variant="outlined"
                  fullWidth
                  value={name}
                  disabled
                />
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
                  disabled
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Phone Number"
                  variant="outlined"
                  fullWidth
                  value={phone}
                  onChange={handlePhoneChange}
                  disabled={!isEditingPhone}
                />
                {!isEditingPhone && (
                  <Button onClick={handleEditPhoneClick}>Edit</Button>
                )}
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="BRN"
                  variant="outlined"
                  fullWidth
                  value={brn}
                  disabled
                />
              </Grid>
              <Grid item xs={12} md={12}>
                <TextField
                  label="Description"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={4}
                  value={description}
                  onChange={handleDescriptionChange}
                  disabled={!isEditingDescription}
                />
                {!isEditingDescription && (
                  <Button onClick={handleEditDescriptionClick}>Edit</Button>
                )}
              </Grid>
            </Grid>
            {(isEditingEmail ||
              isEditingPassword ||
              isEditingPhone ||
              isEditingDescription) && (
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

export default VendorProfile;