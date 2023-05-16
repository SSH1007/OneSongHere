import React from 'react';
import './StudioNoteName.scss';
import StudioNoteNameItem from 'components/atoms/studionote/StudioNoteNameItem';

const StudioNoteName = () => {
  const noteList = [
    'C4',
    'C#4',
    'D4',
    'D#4',
    'E4',
    'F4',
    'F#4',
    'G4',
    'G#4',
    'A4',
    'A#4',
    'B4',
    'C5',
    'C#5',
    'D5',
    'D#5',
    'E5',
    'F5',
    'F#5',
    'G5',
    'G#5',
    'A5',
    'A#5',
    'B5',
    'snare',
    'kick',
  ];

  return (
    <div className="studio__note_name">
      {noteList.map((note) => {
        return <StudioNoteNameItem key={note} noteName={note} />;
      })}
    </div>
  );
};

export default StudioNoteName;
