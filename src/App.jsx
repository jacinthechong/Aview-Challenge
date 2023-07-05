import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [currentJoke, setCurrentJoke] = useState("");
  const [currentLanguage, setCurrentLanguage] = useState("en");
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    getLanguages();
  }, []);

  const getLanguages = async () => {
    const response = await axios.get("http://localhost:8000/languages");
    setLanguages(response.data);
  };

  const getJoke = async () => {
    const response = await axios.get(
      "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,racist,sexist,explicit"
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

  let languageOptions = languages.map((element) => {
    return (
      <option key={element.code} value={element.code}>
        {element.name}
      </option>
    );
  });

  return (
    <>
      <label htmlFor="language-select">Choose a language</label>
      <select
        id="language-select"
        defaultValue="en"
        onChange={(e) => setCurrentLanguage(e.target.value)}
      >
        {languageOptions}
      </select>
      <button onClick={getJoke}>Get New Joke</button>
      <div>{currentJoke}</div>
    </>
  );
}

export default App;
