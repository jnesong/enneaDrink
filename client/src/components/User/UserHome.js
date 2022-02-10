import { useState, useEffect } from 'react';
import { NavLink, Outlet } from "react-router-dom";
import Logout from "./Logout";

function UserHome() {

    const [user, setUser] = useState({});
    const [greeting, setGreeting] = useState("")


    useEffect(() => {
        fetch("/api/me")
            .then((response) => {
                if (response.ok) {
                    response.json().then((user) => setUser(user));
                }
            });
    }, []);

    // console.log(user)
    const date = new Date()
    const timeHr = date.getHours()
    
    useEffect ( () => {
        if (timeHr < 12 && timeHr > 3) {
            // console.log('good morning')
            setGreeting("Good morning")
          } else if (timeHr < 18 && timeHr > 11) {
            // console.log('good afternoon')
            setGreeting("Good afternoon")
          } else {
            // console.log('good evening')
            setGreeting("Good evening")
          }
    }, [timeHr])

    return (
        <>
            <Logout />
            {<br />}
            <h1 className="greeting"> {greeting} {user.displayname}, how are you? </h1>
            <nav id="quizNav">
            <NavLink className="enlarge2" to="quiz"> Quiz </NavLink>
            <NavLink className="enlarge2" to="/journal"> Skip Quiz </NavLink>
            </nav>
            <Outlet />
        </>

    )
}

export default UserHome;