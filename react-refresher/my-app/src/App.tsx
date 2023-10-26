import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>Up</button>
        <p>{count}</p>
        <button onClick={() => setCount((count) => count - 1)}>Down</button>
      </div>
    </>
  );
}

export default App;
