import React, { useState } from 'react';
import Counters from './components/counters';
import Navbar from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [counters, setCounters] = useState([
    { id: 1, value: 0 },
    { id: 2, value: 2 },
    { id: 3, value: 0 },
    { id: 4, value: 7 },
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

  const style = {
    textAlign: 'center',
    marginTop: 50,
  };
  return (
    <div className="App" style={style}>
      <Navbar totalCounters={counters.filter((c) => c.value > 0).length} />
      <Counters
        counters={counters}
        onReset={handleReset}
        onDelete={handleDelete}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
      />
    </div>
  );
};

export default App;
