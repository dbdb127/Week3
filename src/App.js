import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import GetPending from './query/GetPending';
import ReceiveModal from './components/ReceiveModal';

function App() {
  const [isPending, setIsPending] = useState(false);
  const [pendingData, setPendingData] = useState([]);

  return (
    <div className="App">
      <Navbar />

      <GetPending setIsPending={setIsPending} setPendingData={setPendingData} />
      {isPending && (
        <ReceiveModal pendingData={pendingData} setIsPending={setIsPending} />
      )}
    </div>
  );
}

export default App;
