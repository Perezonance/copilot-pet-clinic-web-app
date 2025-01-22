import React, { useEffect, useRef } from 'react';
import { AppointmentNote } from '../../../models/appointments';
import { NoteAudit } from './NoteAudit/NoteAudit';
import { UpdateNote } from '../../../api/appointments/UpdateNote';
import { Button } from '@mui/material';
import './Note.css';

export interface NoteProps {
    note: AppointmentNote;
    appointmentId: number;
}

export const Note: React.FC<NoteProps> = ({ note, appointmentId }) => {
    const [isEditing, setIsEditing] = React.useState<boolean>(false);
    const [noteContent, setNoteContent] = React.useState<string>("");
    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    const handleEditButtonClick = () => {
        setNoteContent(note.note);
        setIsEditing(true);
    };

    const handleDiscardButtonClick = () => {
        setNoteContent("");
        setIsEditing(false);
    };

    const handleSaveButtonClick = async () => {
        setIsEditing(false);
        try {
            await UpdateNote(appointmentId, note.index, { note: noteContent });
        } catch (error) {
            console.error(`Failed to save note: ${error}`);
        }
    };

    const handleTextAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNoteContent(event.target.value);
        adjustTextAreaHeight(event.target);
    };

    const adjustTextAreaHeight = (textArea: HTMLTextAreaElement) => {
        textArea.style.height = 'auto'; // Reset the height
        textArea.style.height = `${textArea.scrollHeight}px`; // Set the height to the scroll height
    };

    useEffect(() => {
        if (textAreaRef.current) {
            adjustTextAreaHeight(textAreaRef.current);
        }
    }, [isEditing]);

    return (
        <div className="Note">
            {isEditing ? (
                <>
                    <textarea
                        ref={textAreaRef}
                        value={noteContent}
                        onChange={handleTextAreaChange}
                    />
                    <Button size="small" variant="outlined" className="discard-note-button" onClick={handleDiscardButtonClick}>
                        Discard
                    </Button>
                    <Button size="small" variant="outlined" color="primary" className="save-note-button" onClick={handleSaveButtonClick}>
                        Save
                    </Button>
                </>
            ) : (
                <>
                    <Button
                        size="small"
                        variant="outlined"
                        color="secondary"
                        className="edit-note-button"
                        onClick={handleEditButtonClick}
                    >
                        Edit
                    </Button>
                    <p>{note.note}</p>
                    <NoteAudit note={note} />
                </>
            )}
        </div>
    );
};
