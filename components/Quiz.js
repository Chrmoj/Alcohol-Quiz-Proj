import React, {useState, useContext} from 'react'
import { Questions } from '../info/QuestionBank'
import { QuizContext } from '../info/contexts'

function Quiz() {
    const {score, setScore, setGameState} = useContext(QuizContext)

    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [optionChosen, setOptionChosen] = useState('')

    const nextQuestion = () => {
        if(Questions[currentQuestion].answer === optionChosen) {
            setScore(score + 1)
        }
        setCurrentQuestion(currentQuestion + 1)
    }

    const finishQuiz = () => {
        if(Questions[currentQuestion].answer === optionChosen) {
            setScore(score + 1)
        }
        setGameState('endScreen');
    }

    return (
        <div className='Quiz'>
            <h1>
                {Questions[currentQuestion].question}
            </h1>
            <div className='options'>
                <button className = 'quiz-btn' onClick={() => setOptionChosen('A')}>{Questions[currentQuestion].optionA}</button>
                <button className = 'quiz-btn' onClick={() => setOptionChosen('B')}>{Questions[currentQuestion].optionB}</button>
                <button className = 'quiz-btn' onClick={() => setOptionChosen('C')}>{Questions[currentQuestion].optionC}</button>
                <button className = 'quiz-btn' onClick={() => setOptionChosen('D')}>{Questions[currentQuestion].optionD}</button>
            </div>
            {currentQuestion === Questions.length - 1 ? (
                <button className= 'btn-finish' onClick={finishQuiz}> Finish Quiz</button>
            ) : (
              <button className='btn-quiz' onClick={nextQuestion}> Next Question</button>  
            )} 
        </div>
    )
}

export default Quiz

