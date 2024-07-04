import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { QuizContext } from "../../contexts/QuizContext";
import "./EmailForm.css";
import { useTranslation } from "react-i18next";

const EmailForm: React.FC = () => {
  const navigate = useNavigate();
  const quizContext = useContext(QuizContext);
  if (!quizContext) {
    throw new Error("QuizContext error");
  }
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const { t } = useTranslation();

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
    setEmailError(false);
  };

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (validateEmail(email)) {
      navigate("/thank-you");
    } else {
      setEmailError(true);
    }
  };

  return (
    <div className="email-form">
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder={t("Enter your email")}
          value={email}
          onChange={handleEmailChange}
          className={emailError ? "error" : ""}
        />
        {emailError && (
          <p className="error-text">{t("Invalid email address")}</p>
        )}
        <button type="submit" disabled={!email}>
          {t("Next")}
        </button>
      </form>
    </div>
  );
};

export default EmailForm;
