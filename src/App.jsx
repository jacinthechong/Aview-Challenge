import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [currentJoke, setCurrentJoke] = useState("");
  const [currentLanguage, setCurrentLanguage] = useState("en");

  const getJoke = async () => {
    const response = await axios.get(
      "https://v2.jokeapi.dev/joke/any?blacklistFlags=nsfw"
    );
    let text;
    if (!response.data.joke) {
      text = `${response.data.setup} ${response.data.delivery}`;
    } else {
      text = response.data.joke;
    }

    translateText(currentLanguage, text);
  };

  const translateText = async (language, text) => {
    const formData = {
      q: text,
      source: "en",
      target: language,
    };
    const response = await axios.post(
      "http://localhost:8000/translate",
      formData
    );
    setCurrentJoke(response.data.translatedText);
  };

  return (
    <>
      <label htmlFor="language-select">Choose a language</label>
      <select
        id="language-select"
        defaultValue="en"
        onChange={(e) => setCurrentLanguage(e.target.value)}
      >
        <option value="en">English</option>
        <option value="fr">French</option>
        <option value="es">Spanish</option>
        <option value="ja">Japanese</option>
      </select>
      <button onClick={getJoke}>Get New Joke</button>
      <div>{currentJoke}</div>
    </>
  );
}

export default App;
