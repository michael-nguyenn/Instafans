import "./Hero.scss";
import { Player } from "@lottiefiles/react-lottie-player";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/start");
  };
  return (
    <>
      <main className="hero">
        <div className="hero__col">
          <h1 className="hero__text">
            It's time to get to know your instagram buddies a lot better...
          </h1>
          <button onClick={handleClick} className="hero__button">
            Let's do it
          </button>
        </div>
        <Player
          src="https://assets1.lottiefiles.com/packages/lf20_h90mcxbi.json"
          className="hero__player"
          loop
          autoplay
        />
      </main>
    </>
  );
}
