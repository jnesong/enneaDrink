import { Outlet } from "react-router-dom";
import DrinkNavBar from "./DrinkNavBar";
import EnneadrinkInfo from "./EnneadrinkInfo";
import plant2 from "./icons/plant2.gif";

function Home () {
    

    return (
        <>

        <DrinkNavBar />

        <Outlet />

        <img className={"plant"} src={plant2} alt="plant gif" />

        </>
    )
}

export default Home;