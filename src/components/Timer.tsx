import { useEffect, useState } from "react";

export const Timer = () => {
  const [timeLeft, setTimeLeft] = useState<number>(60 * 15); // 20 minutes

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
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
