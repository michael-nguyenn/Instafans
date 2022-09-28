import CategoriesList from "../../components/CategoriesList/CategoriesList";

export default function DashboardPage({ hypeman, secretAdmirer, hater, bot }) {
  return (
    <>
      <CategoriesList
        hypeman={hypeman}
        secretAdmirer={secretAdmirer}
        hater={hater}
        bot={bot}
      />
    </>
  );
}
