import { useState } from "react";
interface Props {
  initialValue?: number;
  el?: number;
}
export const CounterBy = ({ initialValue = 15 }: Props) => {
  const [counter, setCounter] = useState({
    counter: initialValue,
    clicks: 0,
  });
  const handleClick: Function = (value: number) =>
    setCounter(({ counter, clicks }) => ({
      counter: counter + value,
      clicks: clicks + 1,
    }));
  const { counter: numCounter, clicks } = counter;
  return (
    <>
      <h1>CounterBy: {numCounter}</h1>
      <h1>Clicks: {clicks}</h1>
      <button onClick={() => handleClick(1)}>+1</button>
      <button onClick={() => handleClick(5)}>+5</button>
    </>
  );
};
