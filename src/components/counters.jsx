import React, { useState } from 'react';
import Counter from './counter';
import { setGlobalState, useGlobalState } from '../state';

const Components = () => {
  const [counters, setCounters] = useState([
    { id: 1, value: 2 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0 },
  ]);

  console.log(setGlobalState);
  // const idValue = useGlobalState('{}');
  // console.log(idValue);

  const handleReset = () => {
    setCounters(
      counters.map((c) => {
        c.value = 0;
        return c;
      }),
    );
  };

  const handleDelete = (counterId) => {
    console.log(counters);
    setCounters(counters.filter((c) => c.id !== counterId));
  };

  // const clCounters = () => {
  //   console.log(counters);
  // };

  const handleIncrement = (el) => {
    setCounters((prevValue) => {
      const newValue = [...prevValue];
      const index = newValue.indexOf(el);
      newValue[index] = { ...el };
      newValue[index].value++;
      return newValue;
    });
  };

  const handleDecrement = (el) => {
    setCounters((prevValue) => {
      const newValue = [...prevValue];
      const index = newValue.indexOf(el);
      newValue[index] = { ...el };
      newValue[index].value--;
      return newValue;
    });
  };

  return (
    <>
      <button onClick={handleReset} className="btn btn-warning btn-sm m-2">
        Reset
      </button>
      {/* <button onClick={clCounters}>CL</button> */}
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          counter={counter}
        />
      ))}
    </>
  );
};

export default Components;
