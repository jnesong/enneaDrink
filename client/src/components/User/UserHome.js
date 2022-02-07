import { useState, useEffect } from 'react';
import { NavLink, Outlet } from "react-router-dom";
import Logout from "./Logout";

function UserHome() {

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
            {<br />}
            <h1> Good morning {user.displayname}, how are you? </h1>
            <nav id="quizNav">
            <NavLink className="enlarge2" to="quiz"> Quiz </NavLink>
            <NavLink className="enlarge2" to="/journal"> Skip Quiz </NavLink>
            </nav>
            <Outlet />
        </>

    )
}

export default UserHome;