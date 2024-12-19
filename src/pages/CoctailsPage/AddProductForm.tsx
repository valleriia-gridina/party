import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "redux/productsSlice";
import { TProduct } from "types/types";

type TProps = {
  defaultProducts: { name: string; isAlcoholic?: boolean }[];
  defaultUnits: string;
  onClose: () => void;
};

const AddProductForm = ({ defaultProducts, defaultUnits, onClose }: TProps) => {
  const dispatch = useDispatch();

  const initialProductValue: TProduct = {
    name: "",
    amount: 0,
    units: defaultUnits,
    isDrink: true,
  };

  const [productValue, setProductValue] = useState(initialProductValue);
  const [productAmount, setProductAmount] = useState<number>(100);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  const handleSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(
      addProduct({
        name: productValue.name,
        amount: productAmount,
        units: productValue.units,
        isDrink: productValue.isDrink,
      })
    );
    setProductValue(initialProductValue);
    setProductAmount(100);
    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <span className="formRow">
        <label>
          <span>Choose a product</span>
          <select
            onChange={(e) => {
              const selectedProduct = JSON.parse(e.target.value);
              setProductValue({
                ...selectedProduct,
                units: selectedProduct.isDrink ? defaultUnits : "gram(s)",
              });
              setIsDisabled(false);
            }}
            defaultValue={productValue.name}
          >
            <option value="" disabled>
              Choose a product
            </option>
            {defaultProducts.map((el) => {
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
                setIsDisabled(Boolean(!productValue.name) || amount <= 0);
              }}
            />
            <em>{productValue.units}</em>
          </span>
        </label>
      </span>
      <button onClick={onClose}>Cancel</button>
      <button type="submit" disabled={isDisabled}>
        Add product
      </button>
    </form>
  );
};

export default AddProductForm;
