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

  const requestHandler = async (event) => {
    try {
      console.log("loading...");
      setLoading(true);
      // const response = await axios.post("http://localhost:8080/apify", {
      //   username: enteredName,
      // });

      // const comments = response.data;

      const comments = data;

      let filteredArray = [];

      for (let i = 0; i < comments.length; i++) {
        for (let j = 0; j < comments[i].length; j++) {
          filteredArray.push(comments[i][j]);
        }
      }

      setUserArray(filteredArray);

      // console.log(userArray);

      if (userArray) {
        console.log("user array");
        let result = userArray.map(({ text }) => text);

        // console.log(result);
        setLoading(false);

        const secondResponse = await axios.post(
          "http://localhost:8080/cohere",
          {
            text: result,
          }
        );

        // console.log(secondResponse.data);
        setPredictions(secondResponse.data);
        console.log("done");
        setLoading(false);
        // navigate(`/dashboard/${enteredName}`);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  let usernameArray = [];

  for (const user of userArray) {
    usernameArray.push(user.ownerUsername);
  }

  if (predictions) {
    predictions.forEach((prediction, index) => {
      for (let i = 0; i < usernameArray.length; i++) {
        if (i === index) {
          prediction.username = usernameArray[i];
        }
      }
    });

    console.log("predictions", predictions);
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
        <Route path="/dashboard/:username" element={<DashboardPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
