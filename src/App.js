import React, { useState, useCallback, useRef } from "react";

export default function App() {
  const [count, setCount] = useState(1);
  const [count_2, setCount_2] = useState(1);
  const [count_3, setCount_3] = useState(1);
  const intervalRef = useRef(null);
  const intervalRef_2 = useRef(null);
  const intervalRef_3 = useRef(null);

  const start = useCallback(() => {
    if (intervalRef.current !== null) {
      return;
    }
    intervalRef.current = setInterval(() => {
      setCount((time_value) =>
        time_value === 10 ? (time_value = 1) : time_value + 1
      );
    }, 1000);
    intervalRef_2.current = setInterval(() => {
      setCount_2((time_value) =>
        time_value === 10 ? (time_value = 1) : time_value + 1
      );
    }, 3000);
    intervalRef_3.current = setInterval(() => {
      setCount_3((time_value) =>
        time_value === 10 ? (time_value = 1) : time_value + 1
      );
    }, 2000);
  }, []);
  const stop = useCallback(() => {
    if (intervalRef.current === null) {
      return;
    }
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }, []);
  const stop_2 = useCallback(() => {
    if (intervalRef_2.current === null) {
      return;
    }
    clearInterval(intervalRef_2.current);
    intervalRef_2.current = null;
  }, []);
  const stop_3 = useCallback(() => {
    if (intervalRef_3.current === null) {
      return;
    }
    clearInterval(intervalRef_3.current);
    intervalRef_3.current = null;
  }, []);
  return (
    <div>
      <p>{count}</p>
      <p>{count_2}</p>
      <p>{count_3}</p>

      <button onClick={start}>start</button>
      <button onClick={stop}>stop</button>
      <button onClick={stop_2}>stop_2</button>
      <button onClick={stop_3}>stop_3</button>
    </div>
  );
}
