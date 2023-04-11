import React, { useEffect, useState } from 'react';
import './app.css';

function App() {
  const [initialData, setInitialData] = useState([{}])

  useEffect(()=> {
    fetch('/api').then(
      response => response.json()
    ).then(data => setInitialData(data))
  },[]);
  return (
    <div className='App'>
      <h1>{initialData.title}</h1>
    </div>
  );
}

export default App;