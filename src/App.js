import React from 'react';
import Counter from './components/counter';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const style = {
    textAlign: 'center',
    marginTop: 50,
  };
  return (
    <div className="App" style={style}>
      <Counter />
    </div>
  );
}

export default App;
