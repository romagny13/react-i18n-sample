import i18n from "./i18n";
import React, { useState } from "react";

export default function App() {
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  console.log("current", currentLanguage);

  const changeLang = l => {
    i18n.changeLanguage(l);
    setCurrentLanguage(l);
  };

  return (
    <div className="container">
      <h1 className="display-3 text-center mb-6">{i18n.t("title")}</h1>
      <div className="d-flex justify-content-center">
        <p className="lead">Change the language:</p>
      </div>
      <div className="d-flex justify-content-center">
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="en"
            id="en"
            onChange={() => changeLang("en")}
            checked={currentLanguage === "en"}
          />
          <label className="form-check-label" htmlFor="en">
            en
          </label>
        </div>
        <div className="form-check  form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="fr"
            id="fr"
            checked={currentLanguage === "fr-FR"}
            onChange={() => changeLang("fr-FR")}
          />
          <label className="form-check-label" htmlFor="fr">
            fr-FR
          </label>
        </div>
      </div>
    </div>
  );
}
