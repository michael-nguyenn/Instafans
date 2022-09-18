import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import "./styles/global.scss";
import LandingPage from "./pages/LandingPage/LandingPage";
import StartPage from "./pages/StartPage/StartPage";
import LoadingPage from "./pages/LoadingPage/LoadingPage";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import { Navigation } from "./components/Navigation/Navigation";

function App() {
  let { username } = useParams();
  console.log(username);
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/start" element={<StartPage />} />
        <Route path="/loading" element={<LoadingPage />} />
        <Route path="/dashboard/:username" element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
