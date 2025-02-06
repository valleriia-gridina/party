interface Action {
  type: string;
  payload?: number;
}

// загружаем значение из localStorage и передаем его ниже в reducer, в initialState.
const initialState = (() => {
  const savedCounter = localStorage.getItem("counter");

  return savedCounter !== null ? JSON.parse(savedCounter) : 0;
})();

const counter = (state: number = initialState, action: Action): number => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "SET_INITIAL_COUNTER":
      return action.payload !== undefined ? action.payload : state;
    default:
      return state;
  }
};

export default counter;
