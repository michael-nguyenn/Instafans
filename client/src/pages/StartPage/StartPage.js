import StartForm from "../../components/StartForm/StartForm.js";

export default function StartPage({
  loading,
  setLoading,
  requestHandler,
  enteredName,
  setEnteredName,
}) {
  return (
    <>
      <StartForm
        loading={loading}
        setLoading={setLoading}
        requestHandler={requestHandler}
        enteredName={enteredName}
        setEnteredName={setEnteredName}
      />
    </>
  );
}
