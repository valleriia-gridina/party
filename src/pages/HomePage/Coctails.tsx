import Section from "components/Section/Section";
import { COCTAILS } from "constants/constants";
import { useDispatch, useSelector } from "react-redux";
import { TProduct, TState } from "types/types";
import { makeCoctail } from "redux/productsSlice";
import CoctailIsDoneModal from "./CoctailIsDoneModal";
import { useState } from "react";

const Coctails = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const products = useSelector((state: TState) => state.products.items);

  const possibleCoctails = COCTAILS.filter((coctail) => {
    const ingredients = coctail.ingredients;
    const cocktailIsPossible = ingredients.every((ingredient) => {
      const product = products.find((p) => p.name === ingredient.name);
      return product && product.amount >= ingredient.amount;
    });
    return cocktailIsPossible && coctail;
  });

  const handleMakeCoctail = (ingredients: TProduct[]) => {
    dispatch(makeCoctail(ingredients));
    setIsModalOpen(true);
  };

  return (
    <Section title="My coctails">
      <ul className="coctails">
        {COCTAILS.map(({ name, ingredients }) => {
          const isCoctailDisabled = !possibleCoctails.find(
            (c) => name === c.name
          );
          return (
            <li key={name}>
              {name}{" "}
              <button
                disabled={isCoctailDisabled}
                onClick={() => handleMakeCoctail(ingredients)}
              >
                {!isCoctailDisabled
                  ? "Make coctail"
                  : "You need more ingredients"}
              </button>
            </li>
          );
        })}
      </ul>
      <CoctailIsDoneModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </Section>
  );
};

export default Coctails;
