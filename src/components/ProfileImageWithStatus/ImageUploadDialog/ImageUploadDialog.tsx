import React, { useState } from "react";
import { Dialog, DialogTitle, DialogActions, Button, DialogContent } from "@mui/material";
// import defaultAvatarURL from '../../../public/default-avatar.jpg';


export interface ImageUploadDialogProps {
    imageURL?: string;
    subText?: string;
    onImageUpload?: (file:File) => void
}

const defaultAvatarURL = '/default-avatar.jpg';


export const ImageUploadDialog: React.FC<ImageUploadDialogProps> = ({imageURL, subText, onImageUpload}) => {
    const [open, setOpen] = useState(false);
    const [preview, setPreview] = useState<string | undefined>(imageURL || defaultAvatarURL);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            console.log("File selected:", file);
            const imageUrl = URL.createObjectURL(file);
            setPreview(imageUrl);
            onImageUpload?.(file); // Pass the file to the parent
        } else {
            setPreview(imageURL || defaultAvatarURL)
        }
    };

    return (
        <div>
            {/* Profile Image Preview */}
            <img className="profile-image" src={preview} alt={subText} />
            
            {/* Button to Open Modal */}
            <Button variant="contained" color="primary" onClick={handleOpen}>
                Upload Image
            </Button>

            {/* Material UI Modal */}
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Upload an Image</DialogTitle>
                
                <DialogContent>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        style={{ display: "block", marginTop: "10px" }}
                    />
                    {preview && <img src={preview} alt="Preview" style={{ width: "100%", marginTop: "10px" }} />}
                </DialogContent>
                
                <DialogActions>
                    <Button onClick={handleClose} color="secondary">
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};
