import { AppointmentStatus } from "../../models/appointments";
import { StatusBadge } from "../StatusBadge/StatusBadge";
import { ProfileImage } from "./ProfileImage/ProfileImage";
import './ProfileImageWithStatus.css';


export interface ProfileImageWithStatusProps {
    status: AppointmentStatus;
    subText: string;
    imageURL?: string;
}



export const ProfileImageWithStatus: React.FC<ProfileImageWithStatusProps> = ({ status, subText, imageURL }) => {
    return (
        <div className="ProfileImageWithStatus">
            <ProfileImage imageURL={imageURL} />
            <span className="subText">{subText}</span>
            <StatusBadge status={status} />
        </div>
    );
};