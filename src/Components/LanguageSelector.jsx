const LanguageSelector = ({ setLanguage, languages, currentLanguage }) => {
  const handleChange = (e) => {
    setLanguage(e.target.value);
  };

  let languageOptions = [];
  if (languages.length > 0) {
    languageOptions = languages.map((element) => {
      return (
        <option key={element.code} value={element.code}>
          {element.name}
        </option>
      );
    });
  }

  return (
    <div className="language-selector">
      <label htmlFor="language-select">Choose a language: </label>
      <select
        id="language-select"
        value={currentLanguage}
        onChange={handleChange}
      >
        {languageOptions}
      </select>
    </div>
  );
};

export default LanguageSelector;
