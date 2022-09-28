import CategoriesList from "../../components/CategoriesList/CategoriesList";

export default function DashboardPage({ predictions }) {
  return (
    <>
      <CategoriesList predictions={predictions} />
    </>
  );
}
