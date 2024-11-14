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
import PublicRoute from "./components/PublicRoute/PublicRoute";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import useAuthCheck from "./hooks/useAuthCheck";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const authChecked = useAuthCheck();
  const { user } = useSelector((state) => state.auth);
  const isAdmin = user?.role === "admin";
  return !authChecked ? (
    <div>Checking authentication....</div>
  ) : (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path="/registration"
          element={
            <PublicRoute>
              <RegistrationPage />
            </PublicRoute>
          }
        />
        <Route
          path="/result/:quizSetId"
          element={
            <PrivateRoute>
              <ResultPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/leaderboard/:quizSetId"
          element={
            <PrivateRoute>
              <LeaderBoardPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/quiz/:quizSetId"
          element={
            <PrivateRoute>
              <QuizPage />
            </PrivateRoute>
          }
        />
        {isAdmin && (
          <Route
            path="/admin"
            element={
              <PrivateRoute>
                <AdminPage />
              </PrivateRoute>
            }
          >
            <Route
              path=""
              element={
                <PrivateRoute>
                  <DashBoardPage />
                </PrivateRoute>
              }
            />
            <Route
              path="set-quiz"
              element={
                <PrivateRoute>
                  <SetQuizPage />
                </PrivateRoute>
              }
            />
            <Route
              path="set-quiz-questions"
              element={
                <PrivateRoute>
                  <SetQuizQuestionsPage />
                </PrivateRoute>
              }
            />
          </Route>
        )}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <ToastContainer autoClose={1000} position="bottom-right" />
    </>
  );
}

export default App;
