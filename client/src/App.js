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
  const [secretAdmirer, setSecretAdmirer] = useState("");
  const [hater, setHater] = useState("");
  const [bot, setBot] = useState("");

  const findBiggestHypeman = useCallback(async () => {
    let hypemans = [];
    let highestHypemanConfidence = 0;
    predictions.forEach((prediction) => {
      if (prediction.prediction === "Hypeman") {
        hypemans.push(prediction);
      }
    });

    hypemans.forEach((hypeman) => {
      hypeman.confidences.map((confidence) => {
        if (
          confidence.option === "Hypeman" &&
          confidence.confidence > Number(highestHypemanConfidence)
        ) {
          highestHypemanConfidence = confidence.confidence;
          setHypeman(hypeman);
        }
        return hypeman;
      });
    });
  }, [predictions]);

  const findBiggestAdmirer = useCallback(async () => {
    let secretAdmirers = [];
    let highestAdmirerConfidence = 0;
    predictions.forEach((prediction) => {
      if (prediction.prediction === "Secret Admirer") {
        secretAdmirers.push(prediction);
      }
    });

    secretAdmirers.forEach((secretAdmirer) => {
      secretAdmirer.confidences.map((confidence) => {
        if (
          confidence.option === "Secret Admirer" &&
          confidence.confidence > Number(highestAdmirerConfidence)
        ) {
          highestAdmirerConfidence = confidence.confidence;
          setSecretAdmirer(secretAdmirer);
        }
        return hypeman;
      });
    });
  }, [predictions]);

  const findBiggestHater = useCallback(async () => {
    let haters = [];
    let highestHaterConfidence = 0;
    predictions.forEach((prediction) => {
      if (prediction.prediction === "Low key hater") {
        haters.push(prediction);
      }
    });

    haters.forEach((hater) => {
      hater.confidences.map((confidence) => {
        if (
          confidence.option === "Low key hater" &&
          confidence.confidence > Number(highestHaterConfidence)
        ) {
          highestHaterConfidence = confidence.confidence;
          setHater(hater);
        }
        return hater;
      });
    });
  }, [predictions]);

  const findBiggestBot = useCallback(async () => {
    let bots = [];
    let highestBotConfidence = 0;
    predictions.forEach((prediction) => {
      if (prediction.prediction === "Bot") {
        bots.push(prediction);
      }
    });

    bots.forEach((bot) => {
      bot.confidences.map((confidence) => {
        if (
          confidence.option === "Bot" &&
          confidence.confidence > Number(highestBotConfidence)
        ) {
          highestBotConfidence = confidence.confidence;
          setBot(bot);
        }
        return bot;
      });
    });
  }, [predictions]);

  useEffect(() => {
    if (predictions) {
      findBiggestHypeman();
      findBiggestAdmirer();
      findBiggestHater();
      findBiggestBot();
    }
  }, [
    findBiggestHypeman,
    findBiggestAdmirer,
    findBiggestHater,
    findBiggestBot,
    predictions,
  ]);

  const requestHandler = async () => {
    try {
      console.log("loading...");
      setLoading(true);
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
      setLoading(false);
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
          element={
            <DashboardPage
              hypeman={hypeman}
              secretAdmirer={secretAdmirer}
              hater={hater}
              bot={bot}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
