import { TestContext } from "@/store/test";
import { useContext, useEffect } from "react";

export const Timer = () => {
  const { timeLeft, setTimeLeft, finished } = useContext(TestContext);

  useEffect(() => {
    if (!finished) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => {
          const newTime = prevTime > 0 ? prevTime - 1 : 0;
          localStorage.setItem("madsoft-test-timeLeft", String(newTime));
          return newTime;
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [finished]);

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
