import React, { createContext, useState, useEffect, ReactNode } from "react";

interface Question {
  question: string;
  type: string;
}

interface Answer {
  question: string;
  answer: string;
}

interface QuizContextProps {
  currentQuestion: number;
  questions: Question[];
  options: string[][];
  questionTypes: string[];
  totalQuestions: number;
  answers: Answer[];
  nextQuestion: (answer: string) => void;
  prevQuestion: () => void;
  setAnswer: (questionIndex: number, answer: string) => void;
  resetQuiz: () => void;
}

const initialContext: QuizContextProps = {
  currentQuestion: 0,
  questions: [],
  options: [],
  questionTypes: [],
  totalQuestions: 0,
  answers: [],
  nextQuestion: () => {},
  prevQuestion: () => {},
  setAnswer: () => {},
  resetQuiz: () => {},
};

export const QuizContext = createContext<QuizContextProps>(initialContext);

export const QuizProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const questions: Question[] = [
    { question: "What is your preferred language?", type: "single-select" },
    { question: "What gender do you identify with?", type: "single-select" },
    { question: "What is your age?", type: "single-select" },
    {
      question: "What do you hate the most in a book?",
      type: "multiple-select",
    },
    { question: "What are your favorite topics?", type: "bubble" },
  ];

  const options = [
    ["English", "French", "German", "Spanish"],
    ["👨", "👩", "👾"],
    ["18-29 years", "30-39 years", "40-49 years", "50+"],
    ["Lack of logic", "Slow pace", "Lack of humor", "Too generic ending"],
    [
      "Werewolf",
      "Action",
      "Royal Obsession",
      "Romance",
      "Young Adult",
      "Bad Boy",
    ],
  ];

  const questionTypes = questions.map((question) => question.type);

  const totalQuestions = questions.length;

  useEffect(() => {
    const storedCurrentQuestion = localStorage.getItem("currentQuestion");
    const storedAnswers = localStorage.getItem("answers");

    if (storedCurrentQuestion && storedAnswers) {
      setCurrentQuestion(Number(storedCurrentQuestion));
      setAnswers(JSON.parse(storedAnswers));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("currentQuestion", currentQuestion.toString());
    localStorage.setItem("answers", JSON.stringify(answers));
  }, [currentQuestion, answers]);

  const nextQuestion = (answer: string) => {
    setCurrentQuestion((prev) => prev + 1);
  };

  const prevQuestion = () => {
    setCurrentQuestion((prev) => prev - 1);
  };

  const setAnswer = (questionIndex: number, answer: string) => {
    setAnswers((prev) => {
      const newAnswers = [...prev];
      newAnswers[questionIndex] = {
        question: questions[questionIndex].question,
        answer,
      };
      return newAnswers;
    });
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    localStorage.removeItem("currentQuestion");
    localStorage.removeItem("answers");
  };

  return (
    <QuizContext.Provider
      value={{
        currentQuestion,
        questions,
        options,
        questionTypes,
        totalQuestions,
        answers,
        nextQuestion,
        prevQuestion,
        setAnswer,
        resetQuiz,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};
