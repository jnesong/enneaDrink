import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import QuizBank from "./QuizBank";

function Quiz (){

    let navigate = useNavigate();
    const [currentQ, setCurrentQ] = useState("")
    // const [buttonDisplay, setButtonDisplay] = useState(currentQ.answerA);

    useEffect( () => {
        setCurrentQ(QuizBank[0])
    }, [])

    function handleClickA (){
        // setButtonDisplay("✔");
        console.log("a clicked")
        const nextQ = QuizBank.find(question => question.id === currentQ.idNextQuestionA)
        if (nextQ) {setCurrentQ(nextQ)}
        else {navigate(`/home/result/${currentQ.drinkResultA}`)}
    }

    function handleClickB (){
        // setButtonDisplay("✔");
        console.log("b clicked")
        const nextQ = QuizBank.find(question => question.id === currentQ.idNextQuestionB)
        if (nextQ) {setCurrentQ(nextQ)}
        else {navigate(`/home/result/${currentQ.drinkResultB}`)}
    }



    return (
        <>
        <p> {currentQ.question} </p>

        <button className="buttonQuiz" onClick={handleClickA}> {currentQ.answerA} </button>

        <button className="buttonQuiz" onClick={handleClickB}> {currentQ.answerB} </button>

        {<br />}
        {<br />}

        <Link className="quizLink" to="/home/quiz" onClick={() => window.location.reload()}> restart quiz </Link>

        </>

    )
}

export default Quiz