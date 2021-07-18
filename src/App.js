import React from 'react';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        {/* {routes.map(el => {
            return  (
              <p>{el.path}</p>
            );
            })} */}
      </div>
    </div>
  );
}

export default App;
