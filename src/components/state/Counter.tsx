import { useReducer } from "react";

type StateProps = {
  count: number;
};

type UpdateAction = {
  type: "INCREMENT" | "DECREMENT";
  payload: number;
};

type ResetAction = {
  type: "RESET";
};

type ActionProps = UpdateAction | ResetAction;

const initialState = {
  count: 0,
};
const reducer = (state: StateProps, action: ActionProps) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + action.payload };
    case "DECREMENT":
      return { count: state.count - action.payload };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

export const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <button onClick={() => dispatch({ type: "INCREMENT", payload: 10 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT", payload: 10 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
      <p>Count is:{state?.count}</p>
    </div>
  );
};
