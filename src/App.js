import React from 'react';
import Home from './components/Home';
import TrainerContextProvider from './context/TrainerContext';
import Pricing from './components/Pricing';
// import Trainers from './components/Trainers';


function App() {
  return (
    <div className="App">
      <TrainerContextProvider>
        <Home />
        {/* <Pricing /> */}
        {/* <Trainers /> */}
      </TrainerContextProvider>
    </div>
  );
}

export default App;
