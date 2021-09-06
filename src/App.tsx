import React, { useState } from 'react';


//function App() {
  const App = () => {
  const [item, setItem] = useState(3);
  return (
    <div>
      HI {item} 
      <button onClick={() => setItem(item + 1)}>Increment</button>
      <button onClick={() => setItem(item - 1)}>Decreament</button>
    </div>
  );
}

export default App;
