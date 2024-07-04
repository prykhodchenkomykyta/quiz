import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Question from "./components/Question/Question";
import EmailForm from "./components/Email/EmailForm";
import GratitudePage from "./components/Gratitude/GratitudePage";
import Loader from "./components/UI/Loader/Loader";
import { QuizProvider } from "./contexts/QuizContext";

const App: React.FC = () => {
  return (
    <Router>
      <QuizProvider>
        <Routes>
          <Route path="/quiz/:questionId" element={<Question />} />
          <Route path="/email" element={<EmailForm />} />
          <Route path="/thank-you" element={<GratitudePage />} />
          <Route path="/loader" element={<Loader />} />
          <Route path="*" element={<Navigate to="/quiz/0" />} />
        </Routes>
      </QuizProvider>
    </Router>
  );
};

export default App;
