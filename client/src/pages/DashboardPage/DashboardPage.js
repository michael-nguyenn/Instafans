import CategoriesList from "../../components/CategoriesList/CategoriesList";

export default function DashboardPage({ hypeman, secretAdmirer, hater }) {
  return (
    <>
      <CategoriesList
        hypeman={hypeman}
        secretAdmirer={secretAdmirer}
        hater={hater}
      />
    </>
  );
}
