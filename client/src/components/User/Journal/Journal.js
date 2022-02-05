import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
        </>
    )

}

export default Journal;