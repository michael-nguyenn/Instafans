import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "./StartForm.scss";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(value) {
  return `${value}`;
}

export default function StartForm() {
  const [value, setValue] = useState([35]);
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSubmit = () => {
    navigate("/loading");
  };

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

  // const theme = createTheme({
  //   status: {
  //     danger: "#e53e3e",
  //   },
  //   palette: {
  //     primary: {
  //       main: "#2D97B9",
  //       darker: "#053e85",
  //     },
  //     neutral: {
  //       main: "#64748B",
  //       contrastText: "#fff",
  //     },
  //   },
  // });

  return (
    <>
      <form className="form">
        <div className="form__container">
          <h2 className="form__header">
            We just need a few things to get started...
          </h2>
          <p>What's your instagram handle?</p>
          <input placeholder="@Lydiash.an"></input>
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
          <button className="form__button" onClick={handleSubmit}>
            Continue
          </button>
        </div>
      </form>
    </>
  );
}
