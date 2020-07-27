import React, { memo, useState } from 'react';
import PureCat from './components/Cat';
import './App.css';

function App() {
  const [cats, setCats] = useState(['Biscuit', 'Jungle', 'Outlaw']);
  return (
    <>
      {cats.map((name, i) => (
        // Using PureCat will ensure a re-render only occurs when the properties of that
        // cat change.
        <PureCat key={i} name={name} />
      ))}
      {/* Thus when a new cat is added, only the new Cat added is rendered. 
      The rest of the kitties stood the same. */}
      <button onClick={() => setCats([...cats, prompt('Name a cat')])}>
        Add a cat
      </button>
    </>
  );
}

export default App;
