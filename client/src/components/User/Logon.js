import { Routes, Route, NavLink } from "react-router-dom";
import Login from './Login';
import Signup from './Signup';
import plant2 from "../icons/plant2.gif";

function LogOn() {

    function handleScroll() {
        window.scroll({
          top: document.body.offsetHeight,
          behavior: 'smooth',
        });
      }

    return (
        <>
            <img className={"plant"} src={plant2} alt="plant gif" />

            {<br />}
            {<br />}
            {<br />}

            <div className="greyBody">

                <nav>
                    <NavLink className="enlarge4" onClick={handleScroll} to="user/login"> Login </NavLink>
                    <NavLink className="enlarge4" onClick={handleScroll} to="user/signup"> Signup </NavLink>
                </nav>
                
                <Routes>
                    <Route path="user/login" element={<Login />} />
                    <Route path="user/signup" element={<Signup />} />
                </Routes>

            </div>
        </>
    );
}

export default LogOn;