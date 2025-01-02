import { AppointmentNavigation } from "../AppointmentNavigation/AppointmentNavigation";
import "./AppointmentNavigationWithReason.css";


export interface AppointmentNavigationWithReasonProps {
    tabOnClickHandler: (tabIndex: number) => void;
    reason: string;
}

export const AppointmentNavigationWithReason: React.FC<AppointmentNavigationWithReasonProps> = ({ reason }) => {
    return (
        <div className="AppointmentNavigationWithReason">
            <AppointmentNavigation />
            <span>{reason}</span>
        </div>
    );
};