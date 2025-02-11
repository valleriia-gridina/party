import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "redux/productsSlice";
import { TProduct, UnitType } from "types/types";

type TProps = {
  defaultProducts: { name: string; isAlcoholic?: boolean }[];
  onClose: () => void;
};

const AddProductForm = ({ defaultProducts, onClose }: TProps) => {
  const dispatch = useDispatch();

  const initialProductValue = {
    name: "",
    amount: 100,
    units: UnitType.ml,
    isDrink: true,
  };

  const [rows, setRows] = useState<TProduct[]>([initialProductValue]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    rows.forEach((row) => {
      dispatch(addProduct(row));
    });
    setRows([initialProductValue]);
    onClose();
  };

  const handleAddRow = () => {
    setRows([...rows, initialProductValue]);
  };

  const handleDeleteRow = (index: number) => {
    setRows(rows.filter((_, i) => i !== index));
  };

  const handleChangeRow = (index: number, updatedRow: Partial<TProduct>) => {
    setRows(
      rows.map((row, i) => (i === index ? { ...row, ...updatedRow } : row))
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      {rows.map((row, index) => (
        <div className="formRow" key={index}>
          <label>
            <span>Choose a product</span>
            <select
              onChange={(e) => {
                const selectedProduct = JSON.parse(e.target.value);
                handleChangeRow(index, {
                  name: selectedProduct.name,
                  isDrink: selectedProduct.isDrink,
                  units: selectedProduct.isDrink ? UnitType.ml : UnitType.g,
                });
              }}
              defaultValue={row.name}
            >
              <option value="" disabled>
                Choose a product
              </option>
              {defaultProducts.map((el) => (
                <option key={el.name} value={JSON.stringify(el)}>
                  {el.name}
                </option>
              ))}
            </select>
          </label>
          <label>
            <span>Add amount</span>
            <span className="formRow">
              <input
                type="number"
                placeholder="Type a number"
                value={row.amount}
                onChange={(e) => {
                  const amount = Number(e.target.value);
                  handleChangeRow(index, { amount });
                }}
              />
              <em>{row.units}</em>
            </span>
          </label>
          <div className="actionBtns">
            <button type="button" className="actionBtn" onClick={handleAddRow}>
              +
            </button>
            {rows.length > 1 && (
              <button
                type="button"
                className="actionBtn"
                onClick={() => handleDeleteRow(index)}
              >
                x
              </button>
            )}
          </div>
        </div>
      ))}

      <button type="button" onClick={onClose}>
        Cancel
      </button>
      <button
        type="submit"
        disabled={rows.some((row) => !row.name || row.amount <= 0)}
      >
        Add product
      </button>
    </form>
  );
};

export default AddProductForm;
