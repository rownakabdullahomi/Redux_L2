import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Count() {
  const [count, setCount] = useState(0);
  const handleIncrement = (value: number) => {
    setCount(count + value);
  };
  const handleDecrement = (value: number) => {
    setCount(count - value);
  };
  return (
    <div>
      <h3 className="text-4xl">{count}</h3>

      <div className="space-x-4">
        <Button onClick={() => handleIncrement(1)}>Increment</Button>
        <Button onClick={() => handleDecrement(1)}>Decrement</Button>
      </div>
    </div>
  );
}
