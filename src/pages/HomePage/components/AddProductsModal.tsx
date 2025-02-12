import Section from "components/Section/Section";
import AddProductForm from "./AddProductForm";
import { DRINKS, OTHER_INGREDIENTS } from "constants/constants";

type TProps = {
  isOpen: boolean;
  onClose: () => void;
};

const AddProductsModal = ({ isOpen, onClose }: TProps) => {
  if (!isOpen) return;

  const drinks = DRINKS.map((el) => ({
    ...el,
    isDrink: true,
  }));

  const otherIngredients = OTHER_INGREDIENTS.map((el) => ({
    name: el,
    isDrink: false,
  }));

  return (
    <div className="modal-wrapper">
      <div className="modal">
        <Section title="Market">
          <AddProductForm
            defaultProducts={[...drinks, ...otherIngredients]}
            onClose={onClose}
          />
        </Section>
      </div>
    </div>
  );
};

export default AddProductsModal;
