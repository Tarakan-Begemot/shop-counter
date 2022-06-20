import React from 'react';

const Counter = (props) => {
  const style = {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 20,
    width: 60,
    display: 'inline-block',
  };

  const className = 'btn btn-sm border border-dark shadow-lg btn-';

  const formatCount = () => (props.counter.value === 0 ? 'Zero' : props.counter.value);

  return (
    <div>
      <p style={style} className={countClasses()}>
        {formatCount(props.counter.value)}
      </p>
      <button
        style={style}
        onClick={() => props.onIncrement(props.counter)}
        className={className + 'secondary'}>
        +
      </button>
      <button
        style={style}
        disabled={props.counter.value === 0}
        onClick={() => props.onDecrement(props.counter)}
        className={className + 'secondary'}>
        -
      </button>
      <button
        style={style}
        onClick={() => props.onDelete(props.counter.id)}
        className={className + 'danger'}>
        Del
      </button>
    </div>
  );

  function countClasses() {
    let classes = 'm-2 p-2 rounded bg-';
    classes += props.counter.value === 0 ? 'primary' : 'success';
    return classes;
  }
};

export default Counter;
