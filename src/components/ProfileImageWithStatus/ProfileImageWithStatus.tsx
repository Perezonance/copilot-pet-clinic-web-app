import { AppointmentStatus } from "../../models/appointments";
import { StatusBadge } from "../StatusBadge/StatusBadge";
import './ProfileImageWithStatus.css';
import { ImageUploadDialog } from "./ImageUploadDialog/ImageUploadDialog";
import { useState } from "react";

export interface ProfileImageWithStatusProps {
    status: AppointmentStatus;
    subText: string;
    imageURL?: string;
}

const defaultAvatarURL = '/default-avatar.jpg';

export const ProfileImageWithStatus: React.FC<ProfileImageWithStatusProps> = ({ status, subText, imageURL }) => {
    // Create state for the profile's image
    const [profileImageURL, setProfileImageURL] = useState<string>(() => imageURL || defaultAvatarURL);

    const handleImageUpload = (file: File) => {
        console.log("Uploaded file received in parent:", file);
        // You can send this to an API or update state
        const imageUrl = URL.createObjectURL(file);
        setProfileImageURL(imageUrl);
    };

    return (
        <span className="ProfileImageWithStatus">
            <ImageUploadDialog imageURL = {profileImageURL} subText= {subText} onImageUpload={handleImageUpload}/>
            <span className="subText">{subText}</span>
            <StatusBadge status={status} />
        </span>
    );
};