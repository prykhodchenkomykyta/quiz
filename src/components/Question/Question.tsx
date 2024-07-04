import React, { useContext, useState } from "react";
import "./Question.css";
import { QuizContext } from "../../contexts/QuizContext";
import { useTranslation } from "react-i18next";
import { useParams, useNavigate } from "react-router-dom";

const Question: React.FC = () => {
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
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const handleAnswer = (answer: string) => {
    setSelectedAnswer(answer);
    setAnswer(currentQuestion, answer);
  };

  const handleNext = () => {
    if (selectedAnswer !== null) {
      nextQuestion(selectedAnswer);
      if (currentQuestion + 1 < totalQuestions) {
        navigate(`/quiz/${currentQuestion + 1}`);
      } else {
        navigate("/loader");
        setTimeout(() => navigate("/email"), 5000);
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
          <span>
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
        {options[currentQuestion].map((option, index) => (
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
        <button onClick={handleNext} disabled={!selectedAnswer}>
          {t("Next")}
        </button>
      </div>
    </div>
  );
};

export default Question;
