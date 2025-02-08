import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { useState } from "react";
import './ProfileImage.css';


export interface ProfileImageWithProps {
    imageURL?: string;
}

const defaultAvatarURL = '/default-avatar.jpg';

export const ProfileImage: React.FC<ProfileImageWithProps> = ({ imageURL }) => {
    const [displayUploadImageModal, setDisplayUploadImageModal] = useState<boolean>(false);

    const handleEditProfileImageButton = () => {
        setDisplayUploadImageModal(true);
    };

    const handleCloseUploadImageModal = () => {
        setDisplayUploadImageModal(false);
    };

    return (
        <span className="profile-image-container">
            <Button
            className="edit-button"
            size="small"
            onClick={handleEditProfileImageButton}>
                Edit    
            </Button>
            <img className="profile-image" src={imageURL || defaultAvatarURL } alt="profile" />
            <Dialog
            open={displayUploadImageModal}
            onClose={handleCloseUploadImageModal}>
                <DialogTitle>Upload Profile Image</DialogTitle>
                <DialogContent>
                    <p>Profile image editing content goes here...</p>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseUploadImageModal}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </span>
    )
}