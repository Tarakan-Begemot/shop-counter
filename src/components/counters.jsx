import React, { useState } from 'react';
import Counter from './counter';

const Components = () => {
  const [counters, setCounters] = useState([
    { id: 1, value: 2 },
    { id: 2, value: 0 },
    { id: 3, value: 0 },
    { id: 4, value: 0 },
  ]);

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

  const handleIncrement = (counter) => {
    const counters = [...counters];
    const index = counters.indexOf(counter);
    console.log(index);
    counters[index] = { counter };
    counters[index].value++;
    setCounters(counters);
  };

  return (
    <>
      <button onClick={handleReset} className="btn btn-warning btn-sm m-2">
        Reset
      </button>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          counter={counter}
        />
      ))}
    </>
  );
};

export default Components;
