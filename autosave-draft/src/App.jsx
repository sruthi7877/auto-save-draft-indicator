import { useEffect, useState } from "react";
import { useAutoSave } from "./hooks/useAutoSave";
import Toast from "./components/Toast";  // we'll create this soon
import "./App.css";

function App() {
  const [draft, setDraft] = useState("");
  const [theme, setTheme] = useState("light");
  const [interval, setInterval] = useState(2000);
  const [paused, setPaused] = useState(false);

  const { status, lastSavedTime, saveNow } = useAutoSave(draft, interval, paused);

  const [toast, setToast] = useState(null); // { type: 'success' | 'error', message: string }

  const handleChange = (e) => {
    setDraft(e.target.value);
  };

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const togglePause = () => {
    setPaused((p) => !p);
  };

   // Load draft and theme from localStorage on mount
  useEffect(() => {
    const savedDraft = localStorage.getItem("draft");
    if (savedDraft) setDraft(savedDraft);

    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) setTheme(savedTheme);
  }, []);

  // Save draft to localStorage on every change
  useEffect(() => {
    localStorage.setItem("draft", draft);
  }, [draft]);

  // Show toast on save status changes
  useEffect(() => {
    if (status === "saved") {
      setToast({ type: "success", message: "Draft saved successfully!" });
    } else if (status === "error") {
      setToast({ type: "error", message: "Error saving draft." });
    }
  }, [status]);

  return (
    <div className={`app-container ${theme}`}>
      <button className="theme-toggle" onClick={toggleTheme}>
        {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </button>

      <button
        className="pause-toggle"
        onClick={togglePause}
        aria-pressed={paused}
        aria-label="Toggle auto-save pause"
      >
        {paused ? "▶️ Resume Auto-Save" : "⏸ Pause Auto-Save"}
      </button>

      <h1>Auto-Save Draft Editor</h1>

      <label htmlFor="interval">⏱ Auto-save interval:</label>
      <select
        id="interval"
        value={interval}
        onChange={(e) => setInterval(Number(e.target.value))}
        style={{ marginLeft: "0.5rem" ,marginRight: "0.5rem" }}
        disabled={paused}
      >
        <option value={2000}>2 seconds</option>
        <option value={5000}>5 seconds</option>
        <option value={10000}>10 seconds</option>
      </select>

      <textarea
        placeholder="Start typing your draft..."
        value={draft}
        onChange={handleChange}
        rows={10}
        aria-label="Draft editor"
      />

      <div className="status">
        {status === "saving" && (
          <p>
            <span className="spinner" /> Saving...
          </p>
        )}
        {status === "saved" && (
          <p>
            ✅ Saved at{" "}
            {lastSavedTime && new Date(lastSavedTime).toLocaleTimeString()}
          </p>
        )}
        {status === "error" && <p>❌ Error saving. You can retry manually.</p>}
      </div>

      <div className="buttons">
        <button onClick={saveNow} disabled={paused}>💾 Save Now</button>
        {status === "error" && !paused && (
          <button onClick={saveNow}>🔁 Retry</button>
        )}
      </div>

      {toast && (
        <Toast
          type={toast.type}
          message={toast.message}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  );
}

export default App;
