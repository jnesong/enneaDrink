import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ }) {
    const [user, setUser] = useState(null);
    const [buttonDisplay, setButtonDisplay] = useState("Login");

    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    function handleSubmit(e) {
        e.preventDefault()

        fetch("/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData),
        }).then(response => {
            if (response.ok) {
                response.json().then((user) => setUser(user));
                setButtonDisplay("✔ login confirmed, thank you!");
                setTimeout(() => {navigate("/home")}, 900);
            } else {
                setButtonDisplay("𝕩 incorrect username or password, please try again. 𝕩")
            };
            }
        )
            .catch(err => {console.log(err.message) });
    };

    // console.log(user)

    return (
        <div className="login">
            <p className="fade"> Welcome back! </p>
            <form onSubmit={handleSubmit} className="fade">
                <div>

                    <label htmlFor="username" />
                    <input
                        className="input-login"
                        type="text"
                        placeholder="enter username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                    />

                    <label htmlFor="password" />
                    <input
                        className="input-login"
                        type="password"
                        placeholder="enter password"
                        name="password"
                        autoComplete="off"
                        value={formData.password}
                        onChange={handleChange}
                    />

                    <button className="buttonLogon" type="submit"> {buttonDisplay} </button>

                </div>

            </form>
            
        </div>
    );
}

export default Login;