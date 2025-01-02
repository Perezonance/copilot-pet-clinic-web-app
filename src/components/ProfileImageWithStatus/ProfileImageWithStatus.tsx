import { AppointmentStatus } from "../../models/appointments";
import { StatusBadge } from "../StatusBadge/StatusBadge";
import './ProfileImageWithStatus.css';
// import defaultAvatarURL from '../../../public/default-avatar.jpg';


export interface ProfileImageWithStatusProps {
    status: AppointmentStatus;
    subText: string;
    imageURL?: string;
}

const defaultAvatarURL = '/default-avatar.jpg';


export const ProfileImageWithStatus: React.FC<ProfileImageWithStatusProps> = ({ status, subText, imageURL }) => {
    return (
        <span className="ProfileImageWithStatus">
            <img className="profile-image" src={imageURL || defaultAvatarURL} alt={subText} />
            <span className="subText">{subText}</span>
            <StatusBadge status={status} />
        </span>
    );
};