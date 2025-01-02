import React, { useEffect, useState } from 'react';
import { AppointmentNote, Appointment } from '../../models/appointments';
import { AddNewNote } from '../../api/appointments/AddNewNote';
import { Note } from './Note/Note';
import { Button } from '@mui/material';
import './Notes.css';

interface NotesProps {
  appointmentId: number;
  notes: AppointmentNote[] | undefined;
}

export const Notes: React.FC<NotesProps> = ({ appointmentId, notes }) => {
  const [editNewNoteMode, setEditNewNoteMode] = useState(false);
  const [newNoteContent, setNewNoteContent] = useState('');
  const [noteList, setNoteList] = useState<AppointmentNote[]>(notes || []);

  useEffect(() => {
    if (notes) {
      setNoteList(notes);
    } else {
      setNoteList([]);
    }
    setEditNewNoteMode(false);
  }, [notes, appointmentId]);

  const handleAddNewNote = () => {
    setEditNewNoteMode(true);
  };

  const handleSaveNote = async () => {
    setEditNewNoteMode(false);
    try {
      const appointment: Appointment | undefined = await AddNewNote(appointmentId, { note: newNoteContent });
      if (appointment && appointment.notes) {
        setNoteList(appointment.notes);
      }
    } catch (error) {
      console.error(`Failed to save note: ${error}`);
    }
  }

  const handleDiscardNote = () => {
    setEditNewNoteMode(false);
  }

  const handleTextAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewNoteContent(event.target.value);
  };

  return (
    <div className="Notes">
      <div className="Header">
        <h1>Notes</h1>
        <Button
          variant="contained"
          color="primary"
          className="edit-button"
          onClick={handleAddNewNote}
        >
          Add Note
        </Button>
      </div>
      {editNewNoteMode && (
        <div className="Note">
          <textarea 
            placeholder="Enter your note here..."
            value={newNoteContent}
            onChange={handleTextAreaChange}
           />
          <div className='edit-controls'>
          <Button
            variant="contained"
            size='small'
            color="secondary"
            className="save-button"
            onClick={handleDiscardNote}>
              Discard
          </ Button>
          <Button 
            className='save-button'
            variant="contained" 
            size='small'
            color="primary"
            onClick={handleSaveNote}>
            Save
          </Button>
          </div>
        </div>
      )}
      <div className="NoteList">
        {noteList?.map(note => <Note key={note.id} note={note} appointmentId={appointmentId} />)}
      </div>
    </div>
  );
};