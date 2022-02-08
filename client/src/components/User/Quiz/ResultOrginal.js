// import { useParams, Link } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import Logout from "../Logout";

// function Result() {
//     const [error, setError] = useState(null);

//     const { enneadrinkID } = useParams();
//     let fetchPath = `/api/enneadrinks/${enneadrinkID}`

//     const [enneadrink, setEnneadrink] = useState({});

//     useEffect(() => {
//         const abortCont = new AbortController();

//         fetch(fetchPath, { signal: abortCont.signal })
//             .then(r => r.json())
//             .then(data => setEnneadrink(data))
//             .catch(err => {
//                 if (err.name === 'AbortError') {
//                     console.log('fetch aborted');
//                 } else { setError(err.message) }
//                 ;
//             })
//         return () => abortCont.abort()
//     }, [fetchPath]);

//     console.log(enneadrink)

//     const [content, setContent] = useState("")

//     function handleAboutClick() {
//         setContent(enneadrink.about)
//     }


//     function handleStrengthsClick() {
//         setContent(enneadrink.strengths)
//     }
//     function handleWeaknessesClick() {
//         setContent(enneadrink.weaknesses)
//     }
//     function handlePracticesClick() {
//         let practicesList = enneadrink.practices.map(practice => (
//             `${practice.title} : ${practice.description} \n`
//         ))
//         setContent(practicesList)
//     }
//     function handleLevelsClick() {
//         let healthsList = enneadrink.healths.map(health => (

//             `${health.level} : ${health.description} \n`

//         ))
//         setContent(healthsList)
//     }

//     let displayedContent = <p>{content}</p>

//     console.log(error)

//     return (
//         <>
//             <div className="topMargin">
//             <Logout />
//             <Link className="quizLink" to="/home/quiz" > restart quiz </Link>
//             {<br />}
//             <Link className="quizLink" to="/journal" > journal </Link>
//                 <h2> result: {enneadrink.drink} </h2>
//                 {<br />}
//                 <h3>  {enneadrink.title} </h3>
//                 {<br />}
//                 <button className="menuItem" onClick={handleAboutClick}> About </button>
//                 <button className="menuItem" onClick={handleStrengthsClick}> Strengths </button>
//                 <button className="menuItem" onClick={handleWeaknessesClick}> Weaknesses </button>
//                 <button className="menuItem" onClick={handlePracticesClick}> Helpful Practices </button>
//                 <button className="menuItem" onClick={handleLevelsClick}> Health Levels </button>
//                 {<br />}

//                 <div className="space">
//                     {displayedContent}
//                 </div>

//                 <h1 className="emoji"> {enneadrink.emoji} </h1>

//             </div>
//         </>
//     )


// }

// export default Result