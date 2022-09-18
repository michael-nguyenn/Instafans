import StartForm from "../../components/StartForm/StartForm.js";

export default function StartPage({ loading, setLoading }) {
  return (
    <>
      <StartForm loading={loading} setLoading={setLoading} />
    </>
  );
}
