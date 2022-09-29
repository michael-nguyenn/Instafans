import { Player } from "@lottiefiles/react-lottie-player";
import animation from "../../assets/images/lf30_editor_nmlayfve.json";
import "./LoadingBar.scss";

export default function LoadingBar() {
  return (
    <>
      <section className="loading">
        <h3 className="loading__text">
          Please wait while the AI analyzes instagram data..
        </h3>
        <Player src={animation} loop autoplay className="loading__icon" />
      </section>
    </>
  );
}
