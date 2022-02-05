import { Outlet } from "react-router-dom";
import plant2 from "./icons/plant2.gif";
import DrinkNavBar from "./DrinkNavBar";
import Logon from "./User/Logon";


function Home() {


    return (
        <>
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