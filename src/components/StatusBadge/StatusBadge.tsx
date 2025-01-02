import { AppointmentStatus } from '../../models/appointments';
import './StatusBadge.css';

export interface StatusBadgeProps {
    status: AppointmentStatus;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
    return (
        <span className={`StatusBadge ${status.toLowerCase()}`}>
            {status}
        </span>
    );
};
