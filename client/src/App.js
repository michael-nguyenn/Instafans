import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import "./styles/global.scss";
import LandingPage from "./pages/LandingPage/LandingPage";
import StartPage from "./pages/StartPage/StartPage";
import LoadingPage from "./pages/LoadingPage/LoadingPage";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import { Navigation } from "./components/Navigation/Navigation";
import { useState } from "react";

function App() {
  const [loading, setLoading] = useState(false);

  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/start"
          element={<StartPage loading={loading} setLoading={setLoading} />}
        />
        <Route path="/loading" element={<LoadingPage />} />
        <Route path="/dashboard/:username" element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
