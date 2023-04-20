import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [riddles, setRiddles] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8080/riddles')
      .then((response) => {
        setRiddles(response.data);
        console.log(riddles);
      })
  }, []);

  return (
    <div className="App">
    </div>
  );
}

export default App;
