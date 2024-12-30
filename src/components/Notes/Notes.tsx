import React from 'react';
import { Button } from '@mui/material';
import './Notes.css';

interface Note {
  id: number;
  content: string;
}

interface NotesProps {
  notes: Note[];
}

export const Notes: React.FC<NotesProps> = ({ notes }) => {
  const [editNewNoteMode, setEditNewNoteMode] = React.useState(false);

  const handleButtonClick = () => {
    setEditNewNoteMode(true);
  };

  return (
    <div className="Notes">
      <Button
        variant="contained"
        color="primary"
        className="edit-button"
        onClick={handleButtonClick}
      >
        Edit
      </Button>
      {/* <div>{notes.map(note => <div key={note.id}>{note.content}</div>)}</div> */}
    </div>
  );
};