import { useState } from "react";

function App() {
  const [mood, setMood] = useState("");
  const [response, setResponse] = useState("");

  const positiveMoods = [
  "happy", "joyful", "excited", "cheerful", "hopeful", "content", "calm", "grateful",
  "optimistic", "peaceful", "confident", "relaxed", "inspired", "loving", "playful",
  "energetic", "proud", "satisfied", "amused"
];

const negativeMoods = [
  "sad", "angry", "frustrated", "anxious", "stressed", "depressed", "lonely", "irritated",
  "guilty", "jealous", "embarrassed", "moody", "regretful", "tense", "afraid", "hurt",
  "resentful", "insecure"
];

const neutralMoods = [
  "bored", "confused", "indifferent", "tired", "distracted", "pensive", "curious",
  "nostalgic", "restless", "alert", "shocked", "meh", "blank", "numb"
];

const handleAnalyze = () => {
  const moodLower = mood.trim().toLowerCase();
  if (!moodLower) return;

  if (positiveMoods.includes(moodLower)) {
    setResponse(" Wow! You are in a positive mood.");
  } else if (negativeMoods.includes(moodLower)) {
    setResponse(" Alas! You are in a negative mood.");
  } else if (neutralMoods.includes(moodLower)) {
    setResponse(" You're feeling something in-between.");
  } else {
    setResponse("Hmm, I couldn't recognize that mood. Try a common one?");
  }
};
const speak = (text) => {
  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance(text);
  synth.cancel(); // cancel any previous speech
  utterance.rate = 1;
  utterance.pitch = 1;
  utterance.lang = 'en-US';
  synth.speak(utterance);
};
const getMoodClass = () => {
  const moodLower = mood.toLowerCase();

  if (positiveMoods.includes(moodLower)) {
    return "bg-gradient-to-br from-yellow-300 via-pink-400 to-red-400 animate-gradient-bg";
  } else if (negativeMoods.includes(moodLower)) {
    return "bg-gradient-to-br from-gray-700 via-red-600 to-black animate-gradient-bg";
  } else if (neutralMoods.includes(moodLower)) {
    return "bg-gradient-to-br from-gray-300 via-blue-300 to-gray-500 animate-gradient-bg";
  } else {
    return "bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-600 animate-gradient-bg";
  }
};




  return (
    <div className={`min-h-screen text-white flex flex-col items-center justify-center px-4 transition-all duration-700 bg-[length:200%_200%] ${getMoodClass()}`}>
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
  <div className="mt-6 bg-white text-black p-4 rounded-lg w-full max-w-md relative shadow-lg">
    <p>{response}</p>
    <button
      onClick={() => speak(response)}
      className="absolute top-2 right-2 text-xl text-indigo-600 hover:text-indigo-800"
      title="Read aloud"
    >
      🔊
    </button>
  </div>
  )}

    </div>
  );
}

export default App;
