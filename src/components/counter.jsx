import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [tags, setTags] = useState(['tag1', 'tag2', 'tag3']);
  const style = {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 20,
  };

  const formatCount = () => (count === 0 ? 'Zero' : count);

  const renderTags = () => {
    if (tags.length === 0) return <p>There are no tags!</p>;
    return (
      <ul>
        {tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  };

  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);

  return (
    <>
      <span style={style} className={countClasses()}>
        {formatCount()}
      </span>
      <button style={style} onClick={handleIncrement} className="btn btn-secondary btn-sm">
        +
      </button>
      <button style={style} onClick={handleDecrement} className="btn btn-secondary btn-sm">
        -
      </button>
      {renderTags()}
    </>
  );

  function countClasses() {
    let classes = 'm-2 p-2 rounded bg-';
    classes += count === 0 ? 'primary' : 'success';
    return classes;
  }
};

export default Counter;
