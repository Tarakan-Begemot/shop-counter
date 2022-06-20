import React from 'react';
import Counter from './counter';

const Components = (props) => {
  return (
    <>
      <button onClick={props.onReset} className="btn btn-warning btn-sm m-2">
        Reset
      </button>
      {props.counters.map((counter) => (
        <Counter
          key={counter.id}
          onDelete={props.onDelete}
          onIncrement={props.onIncrement}
          onDecrement={props.onDecrement}
          counter={counter}
        />
      ))}
    </>
  );
};

export default Components;
