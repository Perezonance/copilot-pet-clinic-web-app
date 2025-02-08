import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import { useState } from "react";
import './ProfileImage.css';


export interface ProfileImageWithProps {
    imageURL?: string;
}

const defaultAvatarURL = '/default-avatar.jpg';

export const ProfileImage: React.FC<ProfileImageWithProps> = ({ imageURL }) => {
    const [displayUploadImageModal, setDisplayUploadImageModal] = useState<boolean>(false);
    const [selectedImage, setSelectedImage] = useState<string | ArrayBuffer | null>(null);

    const handleEditProfileImageButton = () => {
        setDisplayUploadImageModal(true);
    };

    const handleCloseUploadImageModal = () => {
        setDisplayUploadImageModal(false);
        setSelectedImage(null);
    };

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file: File | undefined = event.target.files?.[0];
        if (file) {
            const reader: FileReader =  new FileReader();
            reader.onloadend = () => {
                setSelectedImage(reader.result);
            };
            reader.readAsDataURL(file)
        }
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
                    <input type="file" accept="image/*" onChange={handleImageChange} />
                    {selectedImage && <img src={selectedImage as string} alt="Selected" style={{width: '100%', marginTop: '10px'}} />}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseUploadImageModal}>Cancel</Button>
                </DialogActions>
            </Dialog>
        </span>
    )
}