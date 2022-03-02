import React, {useContext} from 'react'
import {QuizContext} from '../info/contexts'
import '../App.css'

export default function MainMenu() {
    const {gameState, setGameState} = useContext(QuizContext)

    return (
        <div className='Menu'>
            <h1 className= 'description'>Welcome to a quiz that will test you on your knowledge into facts about alcohol related products and alcohol <i class="fas fa-wine-bottle"></i></h1>
            <button className='menu-btn' onClick = {() => setGameState('quiz')}>Start Quiz!</button>
        </div>
    )
}
