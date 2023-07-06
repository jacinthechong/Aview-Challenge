import { useState, useEffect } from "react";
import axios from "axios";
import LanguageSelector from "./LanguageSelector";
import { TRANSLATE_API_ENDPOINT, JOKES_API_ENDPOINT } from "../../constants";

const Joke = () => {
  const [currentJoke, setCurrentJoke] = useState("");
  const [languages, setLanguages] = useState([]);
  const [currentLanguage, setCurrentLanguage] = useState("en");

  useEffect(() => {
    getLanguages();
  }, []);

  /* Using multiple functions to make API calls to allow separation of concerns */

  /* This function will fetch all the available languages from LibreTranslate */
  const getLanguages = async () => {
    try {
      const response = await axios.get(`${TRANSLATE_API_ENDPOINT}/languages`);
      setLanguages(response.data);
    } catch (error) {
      console.error("Failed to fetch languages:", error);
    }
  };

  /* This function will set the current language selected in the LanguageSelector component */
  const setLanguage = (languageInput) => {
    setCurrentLanguage(languageInput);
  };

  /* This function will fetch one joke from the Joke API (currently safe-mode on to filter out nsfw jokes)*/
  const fetchJoke = async () => {
    try {
      const response = await axios.get(`${JOKES_API_ENDPOINT}/Any?safe-mode`);
      return response.data;
    } catch (error) {
      console.error("Failed to fetch joke:", error);
    }
  };

  /* This function will post the selected language and text to the LibreTranslate API */
  const translateText = async (language, text) => {
    try {
      const formData = {
        q: text,
        source: "en",
        target: language,
      };
      const response = await axios.post(
        `${TRANSLATE_API_ENDPOINT}/translate`,
        formData
      );
      return response.data.translatedText;
    } catch (error) {
      console.error("Failed to fetch and translate joke:", error);
    }
  };

  /* This function will combine fetchJoke and translateText to get a new joke and also translate to desired language */
  const getJoke = async () => {
    const jokeData = await fetchJoke();
    let text;
    if (!jokeData.joke) {
      text = `${jokeData.setup} ${jokeData.delivery}`;
    } else {
      text = jokeData.joke;
    }
    const translatedJoke = await translateText(currentLanguage, text);
    setCurrentJoke(translatedJoke);
  };

  return (
    <>
      <LanguageSelector
        languages={languages}
        setLanguage={setLanguage}
        currentLanguage={currentLanguage}
      />
      <button onClick={getJoke}>Get New Joke</button>
      <h1>{currentJoke}</h1>
    </>
  );
};

export default Joke;
