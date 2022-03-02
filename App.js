import React, {useState, useContext} from 'react'
import './App.css';
import EndScreen from './components/EndScreen';
import MainMenu from './components/MainMenu';
import Quiz from './components/Quiz';
import {QuizContext} from './info/contexts'

function App() {
  const [gameState, setGameState] = useState('menu')
  const [score, setScore] = useState(0)


  return (
    <div className="App">
      <h1 className='title'>Alcohol Knowledge Quiz</h1>
      <h2 className= 'fonts'> <i class="fas fa-beer"></i> <i class="fas fa-glass-whiskey"></i> <i class="fas fa-cocktail"></i></h2>
      <QuizContext.Provider value={{gameState, setGameState, score, setScore}}>
        {gameState === 'menu' && <MainMenu />}
        {gameState === 'quiz' && <Quiz />}
        {gameState === 'endScreen' && <EndScreen />}
      </QuizContext.Provider>   
    </div>
  );
}

export default App;
