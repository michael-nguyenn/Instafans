import { Player } from "@lottiefiles/react-lottie-player";
import "./LoadingBar.scss";

export default function LoadingBar() {
  return (
    <>
      <section className="loading">
        <h3 className="loading__text">
          Please wait while we load your InstaFans data...
        </h3>
        <Player
          src="https://assets9.lottiefiles.com/packages/lf20_hppwydw1.json"
          loop
          autoplay
          className="loading__icon"
        />
      </section>
    </>
  );
}
