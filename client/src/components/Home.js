import { Outlet } from "react-router-dom";
import DrinkNavBar from "./DrinkNavBar";
import Logon from "./User/Logon";


function Home() {

    return (
        <>
            {<br />}
            <DrinkNavBar />

            <Outlet />

            {<br />}
            {<br />}
            {<br />}
            {<br />}
            {<br />}
            {<br />}
            {<br />}
            {<br />}
            {<br />}
            {<br />}
            {<br />}

            <Logon />
        </>
    )
}

export default Home;