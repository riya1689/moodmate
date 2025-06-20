import { useState } from "react";

function App() {
  const [mood, setMood] = useState("");
  const [response, setResponse] = useState("");

  const handleAnalyze = () => {
    if (!mood.trim()) return;
    setResponse(`🧠 Hmm... sounds like you're feeling ${mood.toLowerCase()}. Let me vibe-check that!`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 to-purple-700 text-white flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-bold mb-6">MoodMate 💭</h1>
      <input
        type="text"
        placeholder="Describe your mood..."
        value={mood}
        onChange={(e) => setMood(e.target.value)}
        className="w-full max-w-md px-4 py-2 rounded-lg text-black focus:outline-none"
      />
      <button
        onClick={handleAnalyze}
        className="mt-4 bg-white text-indigo-600 font-semibold px-6 py-2 rounded-lg hover:bg-gray-200 transition-all"
      >
        Analyze Mood
      </button>
      {response && (
        <div className="mt-6 bg-white text-black p-4 rounded-lg w-full max-w-md">
          {response}
        </div>
      )}
    </div>
  );
}

export default App;
