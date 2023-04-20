import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.scss';

function App() {
  const [riddles, setRiddles] = useState([]);
  const [difficulty, setDifficulty] = useState('')
  const [riddleObj, setRiddleObj] = useState(null)

  console.log(riddles)
  // if stae easy take random using mathrandom index of riddles array between 0 and ten that also has diffivutly = state
  // console.log(riddles);

  {/* onclick easy setState to easy   */ }
  // on click getRiddle axios request with dificculty state as param 
  {/* display easy riddle question */ }
  {/* add form containing input and enter button  */ }
  {/* input if input to lowercase matches riddle answer to lower case  */ }
  {/* on click enter if input matches answer display correct and answer if incorrect display incorrect and answer */ }

  function setEasy() {
    setDifficulty('easy')
    axios
      .get(`http://localhost:8080/riddles?difficulty=easy`)
      .then((response) => {
        setRiddles(response.data);
      })
  }

  function setMedium() {
    setDifficulty('medium')
    axios
      .get(`http://localhost:8080/riddles?difficulty=medium`)
      .then((response) => {
        setRiddles(response.data);
      })
  }

  function setHard() {
    setDifficulty('hard')
    axios
      .get(`http://localhost:8080/riddles?difficulty=hard`)
      .then((response) => {
        setRiddles(response.data);
      })
  }




  // input state object array of riddles based on difficulty
  function displayQuestion() {

    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    if (difficulty === 'easy') {
      let id = getRandomInt(1, 4)
      const indRiddle = riddles.find(riddle => riddle.id == id)
      console.log(indRiddle)
      setRiddleObj(indRiddle)
    }

    if (difficulty === 'medium') {
      let id = getRandomInt(5, 8)
      const indRiddle = riddles.find(riddle => riddle.id == id)
      console.log(indRiddle)
      setRiddleObj(indRiddle)
    }

    if (difficulty === 'hard') {
      let id = getRandomInt(9, 15)
      const indRiddle = riddles.find(riddle => riddle.id == id)
      console.log(indRiddle)
      setRiddleObj(indRiddle)
    }
  }

  return (
    <div className="App">
      <h1 className='title'>WebDev Riddles</h1>
      <section className='riddles'>
        <div className="riddles__buttons">
          <button className="riddles__button riddles__button--easy" onClick={setEasy}>Easy</button>
          <button className="riddles__button riddles__button--medium" onClick={setMedium}>Medium</button>
          <button className="riddles__button riddles__button--hard" onClick={setHard}>Hard</button>
          <button className="riddles__button riddles__button--getRiddle" onClick={displayQuestion}>Get Riddle</button>
        </div>
        <section className="riddles__question">{riddleObj ? <p>{riddleObj.question}</p> : <p>click get riddle</p>}</section>
        <form action="" className="riddles__form" >
          <input type="text" placeholder='user answer' />
          <button className="riddles__submit">Enter</button>
        </form>
        <section className="riddles__answer">on click answer will go here </section>
      </section>
      <p>meme</p>
    </div>
  );
}

export default App;
