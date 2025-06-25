import { useAppDispatch, useAppSelector } from "../../hook";
import { decrement, increaseByAmount, increment, reset } from "./counterSlice";

const CounterView = () => {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();
  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <button onClick={() => dispatch(increaseByAmount(5))}>Increase by 5</button>
    </div>
  );
};

export default CounterView;
