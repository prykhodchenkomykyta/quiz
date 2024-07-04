import React, { useContext } from "react";
import "./GratitudePage.css";
import { QuizContext } from "../../contexts/QuizContext";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const GratitudePage: React.FC = () => {
  const quizContext = useContext(QuizContext);
  if (!quizContext) {
    throw new Error("QuizContext error");
  }
  const { resetQuiz, answers, questions, questionTypes } = quizContext;
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleRetakeQuiz = () => {
    resetQuiz();
    navigate("/quiz/0");
  };

  const downloadCSV = () => {
    const csvContent =
      "data:text/csv;charset=utf-8," +
      ["order,title,type,answer"]
        .concat(
          answers.map(
            (a, index) =>
              `${index + 1},${a.question},${questionTypes[index]},${a.answer}`
          )
        )
        .join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "quiz_summary.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="thank-you">
      <h2>{t("Thank you for completing the quiz!")}</h2>
      <p>{t("We appreciate your time and effort.")}</p>
      <button onClick={downloadCSV}>{t("Download my answers")}</button>
      <button onClick={handleRetakeQuiz}>{t("Retake quiz")}</button>
    </div>
  );
};

export default GratitudePage;
