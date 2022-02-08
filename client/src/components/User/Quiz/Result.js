import { NavLink, Link, Outlet, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Logout from "../Logout";

function Result( {holdDisplay} ) {

    const { enneadrinkID } = useParams();
    let fetchPath = `/api/enneadrinks/${enneadrinkID}`

    const [enneadrinkResult, setEnneadrinkResult] = useState({});

    useEffect(() => {
        const abortCont = new AbortController();
        fetch(fetchPath, { signal: abortCont.signal })
            .then(r => r.json())
            .then(data => setEnneadrinkResult(data))
            .catch(err => console.log(err))
        return () => abortCont.abort()
    }, [fetchPath]);

    // console.log(enneadrinkResult)

    const [content, setContent] = useState("")

    function handleAboutClick() {
        setContent(enneadrinkResult.about)
    }

    function handleStrengthsClick() {
        setContent(enneadrinkResult.strengths)
    }
    function handleWeaknessesClick() {
        setContent(enneadrinkResult.weaknesses)
    }
    function handlePracticesClick() {
        let practicesList = enneadrinkResult.practices.map((obj) => <li className="health" key={obj.id}> {obj.title} : {obj.description} </li> )
        setContent(practicesList)
    }
    function handleLevelsClick() {
        let healthsList = enneadrinkResult.healths.map((obj) => <li className="health" key={obj.id}> Level {obj.level} : {obj.description} </li>)
        setContent(healthsList)
    }

    holdDisplay(content)

    return (
        <>
            <div className="topMargin">
            <Logout />
            <Link className="quizLink" to="/home/quiz" > restart quiz </Link>
            {<br />}
            <Link className="quizLink" to="/journal" > journal </Link>
                <h2> result: {enneadrinkResult.drink} </h2>
                {<br />}
                <h3>  {enneadrinkResult.title} </h3>
                {<br />}

                <nav>
                    <NavLink className="enlarge3" onClick={handleAboutClick} to="about"> About </NavLink>
                    <NavLink className="enlarge3" onClick={handleStrengthsClick} to="strengths"> Strengths </NavLink>
                    <NavLink className="enlarge3" onClick={handleWeaknessesClick} to="weaknesses"> Weaknesses </NavLink>
                    <NavLink className="enlarge3" onClick={handlePracticesClick} to="practices"> Helpful Practices </NavLink>
                    <NavLink className="enlarge3" onClick={handleLevelsClick} to="health"> Health Levels </NavLink>
                </nav>

                {<br />}
                {<br />}

                <Outlet/>

                {<br />}

                <h1 className="emoji"> {enneadrinkResult.emoji} </h1>

            </div>
        </>
    )


}

export default Result