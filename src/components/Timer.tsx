import { SetStateType } from "@/types";
import { useEffect } from "react";

interface TimerProps {
  timeLeft: number;
  setTimeLeft: SetStateType<number>;
}

export const Timer = ({ timeLeft, setTimeLeft }: TimerProps) => {
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        const newTime = prevTime > 0 ? prevTime - 1 : 0;
        localStorage.setItem("madsoft-test-timeLeft", String(newTime));
        return newTime;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes < 10 ? "0" + minutes : minutes}:${
      remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds
    }`;
  };

  return (
    <div className="timer">
      <p className="font-semibold px-3 py-1 border border-black rounded-md">
        {formatTime(timeLeft)}
      </p>
    </div>
  );
};
