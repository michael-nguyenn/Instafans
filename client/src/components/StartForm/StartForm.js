import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./StartForm.scss";
import data from "../../data/data.json";
// import Box from "@mui/material/Box";
// import Slider from "@mui/material/Slider";

export default function StartForm() {
  const [enteredName, setEnteredName] = useState("");
  const [predictions, setPredictions] = useState("");
  const [userArray, setUserArray] = useState("");

  const navigate = useNavigate();
  const handleClick = () => {
    // navigate("/loading");
  };

  const requestHandler = async (event) => {
    event.preventDefault();

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
    <>
      <form className="form" onSubmit={requestHandler}>
        <div className="form__container">
          <h2 className="form__header">
            We just need a few things to get started
          </h2>
          <p>What's your instagram handle?</p>
          <input
            required
            value={enteredName}
            onChange={(event) => setEnteredName(event.target.value)}
            placeholder="@Lydiash.an"
          ></input>
          <p>How many comments do you want us to analyze?</p>
          {/* <Box>
            <Slider
              getAriaLabel={() => "Minimum distance"}
              value={value1}
              onChange={handleChange1}
              valueLabelDisplay="auto"
              getAriaValueText={valuetext}
              disableSwap
            />
          </Box> */}
          <button className="form__button" onClick={handleClick()}>
            Continue
          </button>
        </div>
      </form>
    </>
  );
}
