import { useNavigate } from "react-router-dom";
import "./StartForm.scss";
import LoadingBar from "../LoadingBar/LoadingBar";

export default function StartForm({
  loading,
  requestHandler,
  setEnteredName,
  enteredName,
}) {
  const navigate = useNavigate();

  const submitHandler = async (event) => {
    event.preventDefault();
    console.log(loading);
    await requestHandler();
    console.log(loading);
    navigate(`/dashboard/${enteredName}`);
  };

  return (
    <>
      {loading ? (
        <LoadingBar />
      ) : (
        <form className="form" onSubmit={submitHandler}>
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
            <button className="form__button">Continue</button>
          </div>
        </form>
      )}
    </>
  );
}
