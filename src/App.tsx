import { type FC } from "react";
import { create } from "zustand";
import { shallow } from "zustand/shallow";
import "./App.css";

type UseCounterType = {
  counter: number;
  incrementCounter: () => void;
};

const useCounter = create<UseCounterType>((set) => {
  return {
    counter: 0,
    incrementCounter: () => {
      set((state) => ({ counter: state.counter + 1 }));
    },
  };
});

const DisplayCounter: FC = () => {
  const counter = useCounter((state) => state.counter, shallow);
  return <div>Counter: {counter}</div>;
};

const CounterControl: FC = () => {
  const incrementCounter = useCounter((state) => state.incrementCounter);
  return <button onClick={incrementCounter}>Increment</button>;
};

export const App: FC = () => {
  return (
    <div>
      <DisplayCounter />
      <CounterControl />
    </div>
  );
};
