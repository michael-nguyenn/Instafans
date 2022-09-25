import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import "./styles/global.scss";
import LandingPage from "./pages/LandingPage/LandingPage";
import StartPage from "./pages/StartPage/StartPage";
import LoadingPage from "./pages/LoadingPage/LoadingPage";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import { Navigation } from "./components/Navigation/Navigation";
import { useState } from "react";
import axios from "axios";
import data from "./data/data.json";

function App() {
  const [loading, setLoading] = useState(false);
  const [enteredName, setEnteredName] = useState("");
  const [predictions, setPredictions] = useState("");
  const [userArray, setUserArray] = useState("");

  const requestHandler = async () => {
    try {
      console.log("loading...");
      const response = await axios.post("http://localhost:8080/apify", {
        username: enteredName,
      });

      const comments = response.data;

      setUserArray(comments);

      console.log(comments);

      let result = await comments.map(({ text }) => text);

      console.log(result);

      const cohereResponse = await axios.post("http://localhost:8080/cohere", {
        text: result,
      });

      setPredictions(cohereResponse.data);
      console.log(cohereResponse);
      console.log("done");
    } catch (error) {
      console.log(error.message);
    }
  };

  if (userArray && predictions) {
    let usernameArray = [];

    for (const user of userArray) {
      usernameArray.push(user.ownerUsername);
    }

    predictions.forEach((prediction, index) => {
      for (let i = 0; i < usernameArray.length; i++) {
        if (i === index) {
          prediction.username = usernameArray[i];
        }
      }
    });
  }

  console.log(predictions);

  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/start"
          element={
            <StartPage
              loading={loading}
              setLoading={setLoading}
              requestHandler={requestHandler}
              enteredName={enteredName}
              setEnteredName={setEnteredName}
            />
          }
        />
        <Route path="/loading" element={<LoadingPage />} />
        <Route path="/dashboard/:username" element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
