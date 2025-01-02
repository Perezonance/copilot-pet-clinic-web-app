
import { AppointmentNote } from "../../../../models/appointments";
import React from "react";
import "./NoteAudit.css";

export interface NoteAuditProps {
    note: AppointmentNote;
}

export const NoteAudit: React.FC<NoteAuditProps> = ({ note }) => {
    return (
        <div className="NoteAudit">
            {note.modifiedBy || note.modifiedById ? (
                <p className="NoteAuditDate">Last modified {calculateTimestamp(note.updatedAt)} by {note.modifiedBy}</p>
            ) : (
                <p className="NoteAuditDate">Created {calculateTimestamp(note.createdAt)} by {note.createdBy}</p>
            )}
        </div>
    );
};

function calculateTimestamp(date: string): string {
    const timestamp = new Date(date);
    const now = new Date();
    const elapsed = now.getTime() - timestamp.getTime();

    const minutes = Math.floor(elapsed / (1000 * 60));
    const hours = Math.floor(elapsed / (1000 * 60 * 60));
    const days = Math.floor(elapsed / (1000 * 60 * 60 * 24));

    if (days > 5) {
        return timestamp.toLocaleDateString();
    } else if (days > 0) {
        return `${days} day${days > 1 ? 's' : ''} ago`;
    } else if (hours > 0) {
        return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else {
        return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    }
}