import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./StartForm.scss";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import LoadingBar from "../LoadingBar/LoadingBar";
import data from "../../data/data.json";

function valuetext(value) {
  return `${value}`;
}

export default function StartForm({ loading, setLoading }) {
  const navigate = useNavigate();
  const [enteredName, setEnteredName] = useState("");
  const [predictions, setPredictions] = useState("");
  const [userArray, setUserArray] = useState("");

  const [value, setValue] = useState([35]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const requestHandler = async (event) => {
    event.preventDefault();

    try {
      console.log("loading...");
      // setLoading(true);
      // const response = await axios.post("http://localhost:8080/apify", {
      //   username: enteredName,
      // });

      // const comments = response.data;

      const comments = data;

      console.log(comments);

      let filteredArray = [];

      for (let i = 0; i < comments.length; i++) {
        for (let j = 0; j < comments[i].length; j++) {
          filteredArray.push(comments[i][j]);
        }
      }

      setUserArray(filteredArray);

      console.log(userArray);

      if (userArray) {
        console.log("user array");
        let result = userArray.map(({ text }) => text);

        console.log(result);

        const secondResponse = await axios.post(
          "http://localhost:8080/cohere",
          {
            text: result,
          }
        );

        console.log(secondResponse.data);
        setPredictions(secondResponse.data);
        console.log("done");
        // setLoading(false);
        navigate(`/dashboard/${enteredName}`);
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

  const marks = [
    {
      value: 1,
      label: "1",
    },
    {
      value: 100,
      label: "24",
    },
  ];

  console.log(predictions);

  return (
    <>
      {/* {loading ? (
        <LoadingBar />
      ) : ( */}
      <form className="form" onSubmit={requestHandler}>
        <div className="form__container">
          <h2 className="form__header">
            We just need a few things to get started...
          </h2>
          <p>What's your instagram handle?</p>
          <input
            required
            value={enteredName}
            onChange={(event) => setEnteredName(event.target.value)}
            placeholder="@Lydiash.an"
          ></input>
          <p className="form__text">
            How many comments do you want us to analyze?
          </p>
          <Box sx={{ width: 400 }} className="form__slider">
            <Slider
              getAriaLabel={() => "Comment range"}
              value={value}
              onChange={handleChange}
              valueLabelDisplay="off"
              getAriaValueText={valuetext}
              marks={marks}
            />
          </Box>
          <button className="form__button">Continue</button>
        </div>
      </form>
      {/* )} */}
    </>
  );
}
