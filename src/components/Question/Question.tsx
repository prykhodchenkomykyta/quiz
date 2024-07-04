import React, { useContext, useState, useEffect } from "react";
import "./Question.css";
import { QuizContext } from "../../contexts/QuizContext";
import { useTranslation } from "react-i18next";
import { useParams, useNavigate } from "react-router-dom";

const languageOptions = [
  { code: "en", name: "English" },
  { code: "fr", name: "Français" },
  { code: "es", name: "Español" },
  { code: "de", name: "Deutsch" },
];

const Question: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(languageOptions[0]);
  const { questionId } = useParams<{ questionId: string }>();
  const quizContext = useContext(QuizContext);
  if (!quizContext) {
    throw new Error("QuizContext must be used within a QuizProvider");
  }
  const {
    currentQuestion,
    questions,
    options,
    totalQuestions,
    nextQuestion,
    prevQuestion,
    setAnswer,
  } = quizContext;
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);

  useEffect(() => {
    const storedLanguage = localStorage.getItem("selectedLanguage");
    if (storedLanguage) {
      const language = languageOptions.find(
        (lang) => lang.code === storedLanguage
      );
      if (language) {
        setSelectedLanguage(language);
        i18n.changeLanguage(language.code);
      }
    } else {
      setSelectedLanguage(languageOptions[0]);
    }
  }, [i18n]);

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    i18n.changeLanguage(language.code);
    localStorage.setItem("selectedLanguage", language.code);
  };

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer);
    setAnswer(currentQuestion, answer);
    const language = languageOptions.find((lang) => lang.name === answer);
    if (language) {
      handleLanguageSelect(language);
    }
  };

  const handleMultiSelectAnswer = (answer: string) => {
    setSelectedAnswers((prev) => {
      if (prev.includes(answer)) {
        return prev.filter((item) => item !== answer);
      } else {
        return [...prev, answer];
      }
    });
  };

  const handleNext = () => {
    if (questions[currentQuestion].type === "multiple-select") {
      if (selectedAnswers.length > 0) {
        nextQuestion(selectedAnswers.join(", "));
        if (currentQuestion + 1 < totalQuestions) {
          navigate(`/quiz/${currentQuestion + 1}`);
        } else {
          navigate("/loader");
          setTimeout(() => navigate("/email"), 5000);
        }
      }
    } else {
      if (selectedAnswer !== null) {
        nextQuestion(selectedAnswer);
        if (currentQuestion + 1 < totalQuestions) {
          navigate(`/quiz/${currentQuestion + 1}`);
        } else {
          navigate("/loader");
          setTimeout(() => navigate("/email"), 5000);
        }
      }
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      prevQuestion();
      navigate(`/quiz/${currentQuestion - 1}`);
    }
  };

  return (
    <div className="question">
      <div className="navigation">
        <div className="navigation-helper">
          <button
            className="back-button"
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
          >
            ❮
          </button>
          <span className="current-question">
            <span>{`${currentQuestion + 1}`}</span>/{`${totalQuestions}`}
          </span>
        </div>
        <div className="progress-bar">
          <div
            className="progress"
            style={{
              width: `${((currentQuestion + 1) / totalQuestions) * 100}%`,
            }}
          ></div>
        </div>
      </div>
      <h2>{t(questions[currentQuestion].question)}</h2>
      <div className="options">
        {questions[currentQuestion].type === "multiple-select"
          ? options[currentQuestion].map((option, index) => (
              <label key={index} className="checkbox-label">
                <input
                  type="checkbox"
                  value={option}
                  checked={selectedAnswers.includes(option)}
                  onChange={() => handleMultiSelectAnswer(option)}
                />
                <span className="checkbox-custom"></span>
                {t(option)}
              </label>
            ))
          : options[currentQuestion].map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                className={selectedAnswer === option ? "selected" : ""}
              >
                {t(option)}
              </button>
            ))}
      </div>
      <div className="navigation">
        <button
          onClick={handleNext}
          disabled={
            questions[currentQuestion].type === "multiple-select"
              ? selectedAnswers.length === 0
              : !selectedAnswer
          }
        >
          {t("Next")}
        </button>
      </div>
    </div>
  );
};

export default Question;
