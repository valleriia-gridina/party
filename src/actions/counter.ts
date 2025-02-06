export const increment = () => {
  return {
    type: "INCREMENT",
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

export const setInitialCounter = (value: number) => {
  return {
    type: "SET_INITIAL_COUNTER",
    payload: value,
  };
};
