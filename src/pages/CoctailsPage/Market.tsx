import Section from "components/Section/Section";
import AddProductForm from "./AddProductForm";
import { useState } from "react";
import { TProduct } from "types/types";
import { DRINKS, INGRIDIENTS } from "constants/constants";

const Market = () => {
  const [storageItems, setStorageItems] = useState<TProduct[]>([]);

  const handleAddProduct = (product: TProduct) => {
    if (!storageItems.length) {
      setStorageItems([product]);
    }

    storageItems.forEach((el) => {
      if (el.name === product.name) {
        const updatedStorageItems = storageItems.map((el) => ({
          ...el,
          amount: el.amount + product.amount,
        }));
        setStorageItems(updatedStorageItems);
      } else {
        setStorageItems([...storageItems, { ...product }]);
      }
    });
  };

  return (
    <>
      <Section title="Market">
        <AddProductForm
          products={DRINKS}
          defaultUnits="litre(s)"
          onAddProduct={handleAddProduct}
        />
        <AddProductForm
          products={INGRIDIENTS.map((el) => ({ name: el, alcoholic: false }))}
          defaultUnits="litre(s)"
          onAddProduct={handleAddProduct}
        />
      </Section>
      <Section title="Home storage">
        {storageItems.length ? (
          <ul>
            {storageItems.map((el) => {
              return (
                <li key={el.name}>
                  <span>
                    {el.name}, {el.amount} {el.units}{" "}
                    <strong>{el.isAlcohol ? "alcohol" : null}</strong>
                  </span>
                  <span>Packaged on: {new Date().toLocaleDateString()}</span>
                  <span>
                    Best before: {el.isAlcohol ? "1 year" : "10 days"}
                  </span>
                </li>
              );
            })}
          </ul>
        ) : (
          <p>The storage is empty</p>
        )}
      </Section>
    </>
  );
};

export default Market;
