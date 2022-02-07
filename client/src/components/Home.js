import { Outlet } from "react-router-dom";
import plant2 from "./icons/plant2.gif";
import DrinkNavBar from "./DrinkNavBar";
import Logon from "./User/Logon";


function Home() {

    const welcomeMessage = "Welcome to the Enneadrink, \n a guide to help us understand how we’ve been shaped by our stories \n and provide words that resonate with us, through nine personality-types. \n It is designed to encourage routine self-reflection, by inviting us to \n sit down, have a drink, and process our experiences. "


    return (
        <>
            {<br />}
            <p className="fade" > {welcomeMessage} </p>

            <DrinkNavBar />

            <Outlet />

            {<br />}
            {<br />}
            {<br />}
            {<br />}

            <Logon />

            <img className={"plant"} src={plant2} alt="plant gif" />

        </>
    )
}

export default Home;