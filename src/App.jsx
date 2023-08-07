import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage";
import PostDetails from "./Pages/postDetails";
import LoginPage from "./Pages/LoginPage";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bootstrapThunkLogin } from "./store/auth/thunks";
import ToolBar from "./components/ToolBar";
import LandingPage from "./Pages/LandingPage";
import { selectLoginToken } from "./store/auth/selectors";

function App() {
  const dispatch = useDispatch();
  const token = useSelector(selectLoginToken);

  useEffect(() => {
    dispatch(bootstrapThunkLogin);
  }, [dispatch]);

  return (
    <>
      <div>
        <ToolBar />
      </div>

      <div>
        <Routes>
          {!token ? (
            <>
              <Route path="/home" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
            </>
          ) : (
            <>
              <Route path="/" element={<LandingPage />} />
              <Route path="/:id" element={<PostDetails />} />
            </>
          )}
        </Routes>
      </div>
    </>
  );
}

export default App;
