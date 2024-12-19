import Section from "components/Section/Section";
import Market from "./Market";

const CoctailsPage = () => {
  return (
    <div className={"container"}>
      <h1>Coctail party</h1>
      <Market />
      <Section title="My coctails">will be soon...</Section>
    </div>
  );
};

export default CoctailsPage;
