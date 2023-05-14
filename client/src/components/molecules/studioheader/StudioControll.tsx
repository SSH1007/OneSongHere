import React, { useCallback } from 'react';
import './StudioControll.scss';
import LogoIcon from 'components/atoms/common/LogoIcon';
import PlayIcon from 'components/atoms/stuidioHeader/PlayIcon';
import StopIcon from 'components/atoms/stuidioHeader/StopIcon';
import * as Tone from 'tone';
import { Note } from 'types/Note';
import Button from 'components/atoms/buttons/Button';

interface StudioControllProps {
  notes: Note[];
  instrumentInstances: {
    piano: Tone.Sampler | null;
    casio: Tone.Sampler | null;
    drum: {
      [key: string]: Tone.Player;
    } | null;
  };
  currentInstrument: string;
  changePlayingStyle: (timing: number) => void;
  revertPlayingStyle: (timing: number) => void;
  setNoteColumnStyle: React.Dispatch<React.SetStateAction<boolean[]>>;
  clearNotes: () => void;
}

const StudioControll = ({
  notes,
  instrumentInstances,
  currentInstrument,
  changePlayingStyle,
  revertPlayingStyle,
  setNoteColumnStyle,
  clearNotes,
}: StudioControllProps) => {
  // 시퀀스 재생 메소드
  const playSequence = () => {
    const initialStyle = Array(160).fill(false);

    notes.forEach((note) => {
      const now = Tone.now();
      if (note.instrumentType === 'melody') {
        const instrumentInstance =
          instrumentInstances[currentInstrument as 'piano' | 'casio'];
        if (instrumentInstance != null) {
          instrumentInstance.triggerAttackRelease(
            note.names,
            note.duration,
            now + note.timing
          );
        }
      } else if (note.instrumentType === 'beat') {
        const drumInstance = (
          instrumentInstances.drum as {
            [key: string]: Tone.Player;
          }
        )[note.names as string];
        if (drumInstance) {
          drumInstance.start(now + note.timing);
        }
      }

      // setTimeout(() => {
      //   const newStyle = [...initialStyle];
      //   newStyle[note.timing * 4] = true;
      //   setNoteColumnStyle(newStyle);
      // }, note.timing * 1000);

      // setTimeout(() => {
      //   setNoteColumnStyle([...initialStyle]);
      // }, (note.timing + Tone.Time('8n').toSeconds()) * 1000);
    });

    // 칸 다 재생하는건데 아직 느려서 잘 안됨
    for (let i = 0; i < 160; i += 1) {
      setTimeout(() => {
        const newStyle = [...initialStyle];
        newStyle[i] = true;
        setNoteColumnStyle(newStyle);
      }, i * 250);

      setTimeout(() => {
        setNoteColumnStyle([...initialStyle]);
      }, (i + 0.3) * 250);
    }
  };
  const stopSequence = () => {
    Tone.Transport.stop();
  };

  return (
    <div className="studio__header-controll">
      <LogoIcon goHome size="small" whiteMode />
      <button
        type="button"
        onClick={playSequence}
        className="studio__header-controll-icon"
      >
        <PlayIcon size={30} />
      </button>
      {/* <button
        type="button"
        onClick={stopSequence}
        className="studio__header-controll-icon"
      >
        <StopIcon size={30} />
      </button> */}
      <div className="studio__header-clear-button">
        <Button
          size="small"
          color="primary"
          label="지우기"
          type="button"
          onClick={clearNotes}
        />
      </div>
    </div>
  );
};

export default StudioControll;
