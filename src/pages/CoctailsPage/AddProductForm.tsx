import { useState } from "react";
import { TProduct } from "types/types";

type TProps = {
  products: { name: string; alcoholic?: boolean }[];
  defaultUnits: string;
  onAddProduct: (product: TProduct) => void;
};

const AddProductForm = ({ products, defaultUnits, onAddProduct }: TProps) => {
  const [productValue, setProductValue] = useState<{
    name: string;
    alcoholic: boolean;
  }>({ name: "", alcoholic: false });
  const [productAmount, setProductAmount] = useState<number>(1);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  const handleSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (productValue) {
      onAddProduct({
        name: productValue?.name,
        isAlcohol: productValue?.alcoholic,
        amount: productAmount,
        units: defaultUnits,
      });
      setProductAmount(1);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <span className="formRow">
        <label>
          <span>Select a drink</span>
          <select
            onChange={(e) => {
              const product = e.target.value;
              setProductValue(JSON.parse(product));
              setIsDisabled(false);
            }}
            defaultValue={productValue.name}
          >
            <option value="" disabled>
              Select a drink
            </option>
            {products.map((el) => {
              return (
                <option key={el.name} value={JSON.stringify(el)}>
                  {el.name}
                </option>
              );
            })}
          </select>
        </label>
        <label>
          <span>Add amount</span>
          <span className="formRow">
            <input
              type="number"
              placeholder="Type a number"
              value={productAmount}
              onChange={(e) => {
                const amount = Number(e.target.value);
                setProductAmount(amount);
                setIsDisabled(amount <= 0);
              }}
            />
            {defaultUnits ? <em>{defaultUnits}</em> : null}
          </span>
        </label>
      </span>
      <button type="submit" disabled={isDisabled}>
        Add product
      </button>
    </form>
  );
};

export default AddProductForm;
