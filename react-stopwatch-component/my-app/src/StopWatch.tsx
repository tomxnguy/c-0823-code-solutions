import { useState } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';
import './StopWatch.css';

export default function StopWatch() {
  const [elapsedTime, setElapsedTime] = useState(0);
  const [intervalId, setIntervalId] = useState<number>();

  function handlePlayClick() {
    if (intervalId === undefined) {
      const id = setInterval(() => setElapsedTime((prev) => prev + 1), 1000);
      setIntervalId(id);
    } else {
      clearInterval(intervalId);
      setIntervalId(undefined);
    }
  }

  return (
    <>
      <div
        className="stopwatch"
        onClick={() => intervalId !== undefined && setElapsedTime(0)}>
        <div className="watch-face">
          <ElapsedTime time={elapsedTime} />
        </div>
      </div>
      <div>
        <PlayButton
          isRunning={intervalId !== undefined}
          onClick={handlePlayClick}
        />
      </div>
    </>
  );
}

type TimeProps = {
  time: number;
};

function ElapsedTime({ time }: TimeProps) {
  return <div className="timer">{time}</div>;
}

type ButtonProps = {
  isRunning: boolean;
  onClick: () => void;
};

function PlayButton({ isRunning, onClick }: ButtonProps) {
  return (
    <div className="play-button" onClick={onClick}>
      {isRunning ? <FaPause /> : <FaPlay />}
    </div>
  );
}
