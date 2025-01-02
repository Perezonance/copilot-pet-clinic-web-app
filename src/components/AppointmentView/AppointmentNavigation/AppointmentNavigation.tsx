import './AppointmentNavigation.css';

export interface AppointmentNavigationProps {

}

export const AppointmentNavigation: React.FC<AppointmentNavigationProps> = () => {
    return (
        <div className="AppointmentNavigation">
            <nav>
                <ul>
                <li>Details</li>
                <li>Chart</li>
                <li>Edit</li>
                </ul>
            </nav>
        </div>
    );
};