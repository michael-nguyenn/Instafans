import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/global.scss";
import LandingPage from "./pages/LandingPage/LandingPage";
import StartPage from "./pages/StartPage/StartPage";
import LoadingPage from "./pages/LoadingPage/LoadingPage";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import { Navigation } from "./components/Navigation/Navigation";
import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import data from "./data/data.json";

function App() {
  const [loading, setLoading] = useState(false);
  const [enteredName, setEnteredName] = useState("");
  const [predictions, setPredictions] = useState("");
  const [userArray, setUserArray] = useState("");
  const [hypeman, setHypeman] = useState("");

  const findBiggestHypeman = useCallback(async () => {
    let hypemans = [];
    let highestHypemanConfidence = 0;
    predictions.forEach((prediction) => {
      if (prediction.prediction == "Hypeman") {
        hypemans.push(prediction);
      }
    });

    hypemans.forEach((hypeman) => {
      hypeman.confidences.map((confidence) => {
        if (
          confidence.option == "Hypeman" &&
          confidence.confidence > Number(highestHypemanConfidence)
        ) {
          highestHypemanConfidence = confidence.confidence;
          setHypeman(hypeman);
        }
      });
    });
    console.log(hypeman);
    console.log("helllooooo");
  }, []);

  useEffect(() => {
    if (predictions) {
      findBiggestHypeman();
    }
  }, [findBiggestHypeman]);

  const requestHandler = async () => {
    try {
      console.log("loading...");
      // const response = await axios.post("http://localhost:8080/apify", {
      //   username: enteredName,
      // });

      // const comments = response.data;

      setUserArray(data);

      // console.log(data);

      let result = await data.map(({ text }) => text);

      // console.log(result);

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

  // console.log(predictions);
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
        <Route
          path="/dashboard/:username"
          element={<DashboardPage predictions={predictions} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
