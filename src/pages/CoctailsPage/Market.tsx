import Section from "components/Section/Section";
import { useSelector } from "react-redux";
import { useState } from "react";
import { TState } from "types/types";
import AddProductModal from "./AddProductsModal";

const Market = () => {
  const products = useSelector((state: TState) => state.products.items);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Section title="Home storage">
        {products.length ? (
          <ul>
            {products.map((el) => {
              return (
                <li key={el.name}>
                  <span>
                    {el.name}, {el.amount} {el.units}{" "}
                  </span>
                  <span>Packaged on: {new Date().toLocaleDateString()}</span>
                  <span>
                    Best use before: {el.isDrink ? "1 year" : "10 days"}
                  </span>
                </li>
              );
            })}
          </ul>
        ) : (
          <p>The storage is empty</p>
        )}
        <button onClick={() => setIsModalOpen(true)}>
          {products.length ? "Add more products" : "Go to the market"}
        </button>
      </Section>

      <AddProductModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default Market;
