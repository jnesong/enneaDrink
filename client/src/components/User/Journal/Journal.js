import { useState, useEffect } from 'react';
import { NavLink, Link, Outlet } from 'react-router-dom';
import Logout from "../Logout"

function Journal() {

    const [user, setUser] = useState({});


    useEffect(() => {
        fetch("/api/me")
            .then((response) => {
                if (response.ok) {
                    response.json().then((user) => setUser(user));
                }
            });
    }, []);

    console.log(user)


    return (
        <>
            <Logout />
            <Link className="quizLink" to="/home/quiz"> Quiz </Link>
            <p> {user.displayname}'s journal </p>
            <nav>
                <NavLink className="enlarge3" to="new"> New Entry </NavLink>
                <NavLink className="enlarge3" to="history"> History </NavLink>
            </nav>

            {<br />}
            {<br />}
            {<br />}
            {<br />}

            <Outlet />
        </>
    )

}

export default Journal;