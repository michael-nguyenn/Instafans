import { useNavigate } from "react-router-dom";
import "./StartForm.scss";
// import Box from "@mui/material/Box";
// import Slider from "@mui/material/Slider";

export default function StartForm() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/loading");
  };
  return (
    <>
      <form className="form">
        <div className="form__container">
          <h2 className="form__header">
            We just need a few things to get started
          </h2>
          <p>What's your instagram handle?</p>
          <input placeholder="@Lydiash.an"></input>
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
