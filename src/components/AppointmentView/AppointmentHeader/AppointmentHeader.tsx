import { ProfileImageWithStatus, ProfileImageWithStatusProps } from "../../ProfileImageWithStatus/ProfileImageWithStatus";
import { AppointmentNavigationWithReason, AppointmentNavigationWithReasonProps } from "../AppointmentNavigationWithReason/AppointmentNavigationWithReason";
import './AppointmentHeader.css';

export interface AppointmentHeaderProps extends ProfileImageWithStatusProps, AppointmentNavigationWithReasonProps {
    
}

export const AppointmentHeader: React.FC<AppointmentHeaderProps> = ({status, subText, imageURL, tabOnClickHandler, reason}) => {
    return (
        <div className="AppointmentHeader">
            <ProfileImageWithStatus status={status} subText={subText} imageURL={imageURL} />
            <AppointmentNavigationWithReason tabOnClickHandler={tabOnClickHandler} reason={reason} />
        </div>
    );
};