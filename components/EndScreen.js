import React, {useContext} from 'react'
import {QuizContext} from '../info/contexts'
import {Questions} from '../info/QuestionBank'
import '../App.css'

function EndScreen() {
    const { score, setScore, setGameState } = useContext(QuizContext)

    const restartQuiz = () => {
        setScore(0)
        setGameState('menu')
    }

    return (
        <div className='EndScreen'>
            <h1>Quiz Finished</h1>
            <h3>You scored a:</h3>
            <h2> {score} out of {Questions.length} correct</h2>
            <button className='end-btn' onClick={restartQuiz}>Restart Quiz</button>
        </div>
    )
}

export default EndScreen
