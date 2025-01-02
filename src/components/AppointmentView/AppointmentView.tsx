import React, { useEffect } from 'react';
import { Appointment } from '../../models/appointments';
import { Notes } from '../Notes/Notes';
import { AppointmentHeader } from './AppointmentHeader/AppointmentHeader';
import './AppointmentView.css';

interface AppointmentViewProps {
    appointment: Appointment;
}

export const AppointmentView: React.FC<AppointmentViewProps> = ({ appointment }) => {
    const [selectedAppointment, setSelectedAppointment] = React.useState<Appointment | undefined>(undefined);
    const [selectedTab, setSelectedTab] = React.useState<number>(0);

    const handleTabClick = (tabIndex: number) => {
        setSelectedTab(tabIndex);
    }

    useEffect(() => {
        setSelectedAppointment(appointment);
    }, [appointment, selectedTab, selectedAppointment]);

    return (
        <div className="AppointmentView">
            {selectedAppointment && (
                <>
                    <AppointmentHeader tabOnClickHandler={handleTabClick} reason={selectedAppointment.reason} status={selectedAppointment.status} subText={selectedAppointment.petName}/>
                    
                    <Notes appointmentId={selectedAppointment.id} notes={selectedAppointment.notes} />
                </>
            )}
        </div>
    );
};