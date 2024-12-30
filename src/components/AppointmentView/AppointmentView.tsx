import React from 'react';
import { Appointment } from '../../models/appointments'
import { Notes } from '../Notes/Notes';

interface AppointmentViewProps {
    appointment: Appointment;
}

export const AppointmentView: React.FC<AppointmentViewProps> = ({ appointment }) => {
    return (
        <div className="AppointmentView">
            {/* <ProfileImageWithStatus status={appointment.status} subText={appointment.petName} imageURL={appointment.petImageURL} /> */}
            <Notes notes={appointment.notes}/>
        </div>
    );
};