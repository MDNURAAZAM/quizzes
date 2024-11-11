import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import ResultPage from "./pages/ResultPage";
import LeaderBoardPage from "./pages/LeaderBoardPage";
import QuizPage from "./pages/QuizPage";
import DashBoardPage from "./pages/DashBoardPage";
import AdminPage from "./pages/AdminPage";
import SetQuizPage from "./pages/SetQuizPage";
import SetQuizQuestionsPage from "./pages/SetQuizQuestionsPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/registration" element={<RegistrationPage />} />
      <Route path="/result" element={<ResultPage />} />
      <Route path="/leaderboard" element={<LeaderBoardPage />} />
      <Route path="/quiz" element={<QuizPage />} />
      <Route path="/admin" element={<AdminPage />}>
        <Route path="" element={<DashBoardPage />} />
        <Route path="set-quiz" element={<SetQuizPage />} />
        <Route path="set-quiz-questions" element={<SetQuizQuestionsPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
