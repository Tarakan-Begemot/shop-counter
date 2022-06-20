import React from 'react';
import Counters from './components/counters';
import Navbar from './components/navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const style = {
    textAlign: 'center',
    marginTop: 50,
  };
  return (
    <div className="App" style={style}>
      <Navbar />
      <Counters />
    </div>
  );
}

export default App;
