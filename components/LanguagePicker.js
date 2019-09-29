import PropTypes from "prop-types";

const LanguagePicker = ({ currentLanguage, timeout, onChangeLanguage }) => {
  const languageMap = {
    "en-US": "English",
    "pt-BR": "Português"
  };
  return (
    <div id="language-picker" style={timeout ? { display: "none" } : {}}>
      <span
        className={currentLanguage === "pt-BR" ? "selected" : ""}
        onClick={() => onChangeLanguage("pt-BR")}
      >
        Português
      </span>
      <span
        className={currentLanguage === "en-US" ? "selected" : ""}
        style={{ marginLeft: "1rem" }}
        onClick={() => onChangeLanguage("en-US")}
      >
        English
      </span>
    </div>
  );
};

LanguagePicker.propTypes = {
  currengLang: PropTypes.string,
  timeout: PropTypes.bool,
  onChangeLanguage: PropTypes.func
};

export default LanguagePicker;
