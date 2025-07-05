import { Button } from "@/components/ui/button";
import { decrement, increment } from "@/redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks/hooks";


export default function Count() {
  const count = useAppSelector((state) => state.counterReducer.value);
  const dispatch = useAppDispatch();
  return (
    <div>
      <h3 className="text-4xl">{count}</h3>

      <div className="space-x-4">
        <Button onClick={() => dispatch(increment())}>Increment</Button>
        <Button onClick={() => dispatch(decrement())}>Decrement</Button>
      </div>
    </div>
  );
}
