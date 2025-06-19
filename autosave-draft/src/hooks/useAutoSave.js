import { useEffect, useRef, useState } from "react";

export function useAutoSave(content, delay = 2000, paused = false) {
  const [status, setStatus] = useState("idle");
  const [lastSavedTime, setLastSavedTime] = useState(null);
  const timer = useRef(null);

  const simulateSave = () => {
    setStatus("saving");
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        Math.random() < 0.8 ? resolve() : reject();
      }, 1000);
    });
  };

  const saveNow = async () => {
    if (!content.trim()) return;
    setStatus("saving");
    try {
      await simulateSave();
      setStatus("saved");
      setLastSavedTime(new Date());
    } catch {
      setStatus("error");
    }
  };

  useEffect(() => {
    if (!content.trim() || paused) return;

    if (timer.current) clearTimeout(timer.current);

    timer.current = setTimeout(() => {
      saveNow();
    }, delay);

    return () => clearTimeout(timer.current);
  }, [content, delay, paused]);

  return { status, lastSavedTime, saveNow };
}


