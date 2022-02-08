import { Link, Outlet } from 'react-router-dom';
import Logout from "../Logout";

function Result() {

    return (
        <>
            <div className="topMargin">
            <Logout />
            <Link className="quizLink" to="/home/quiz" > restart quiz </Link>
            {<br />}
            <Link className="quizLink" to="/journal" > journal </Link>
                <h2> result: {enneadrink.drink} </h2>
                {<br />}
                <h3>  {enneadrink.title} </h3>
                {<br />}
                
                <Outlet/>

                {<br />}

                <h1 className="emoji"> {enneadrink.emoji} </h1>

            </div>
        </>
    )


}

export default Result