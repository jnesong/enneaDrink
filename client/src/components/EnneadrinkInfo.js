import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import plant2 from "./icons/plant2.gif";



function EnneadrinkInfo() {
    const [error, setError] = useState(null);

    const { enneadrinkID } = useParams();
    let fetchPath = `/api/enneadrinks/${enneadrinkID}`

    const [enneadrink, setEnneadrink] = useState({});

    useEffect(() => {
        const abortCont = new AbortController();

      fetch(fetchPath, { signal: abortCont.signal})
        .then(r => r.json())
        .then(data => setEnneadrink(data))
        .catch(err => {
            if (err.name === 'AbortError') {
                console.log('fetch aborted');
            } else {setError(err.message)}
;        })
        return () => abortCont.abort()
    }, [fetchPath]);  

    console.log(enneadrink)

    const [content, setContent] = useState("")

    function handleAboutClick (){
        setContent(enneadrink.about)
    }
    function handleStrengthsClick (){
        setContent(enneadrink.about)
    }
    function handleWeaknessesClick (){
        setContent(enneadrink.about)
    }
    function handlePracticesClick (){
        setContent(enneadrink.about)
    }
    function handleLevelsClick (){
        setContent(enneadrink.about)
    }

    let displayedContent = <p>{content}</p>

    return (
        <div className="topMargin">
        <button className="menuItem" onClick={handleAboutClick}> About </button>
        <button className="menuItem" onClick={handleStrengthsClick}> Strengths </button>
        <button className="menuItem" onClick={handleWeaknessesClick}> Weaknesses </button>
        <button className="menuItem" onClick={handlePracticesClick}> Helpful Practices </button>
        <button className="menuItem" onClick={handleLevelsClick}> Health Levels </button>
        {<br/>}
        {<br/>}
        <h1>{enneadrink.title}</h1>
        {displayedContent}
        </div>
    )


}

export default EnneadrinkInfo