
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Logout() {
  const [buttonDisplay, setButtonDisplay] = useState("Logout");
  const navigate = useNavigate();


    function handleLogout() {
      fetch( "/api/logout", {
        method: "DELETE",
      }).then(console.log("bye"))
      setButtonDisplay("bye!");
      setTimeout(() => {navigate("/")}, 1000);
    }
  
    return (
      <header>
        <button className="buttonLogout" onClick={handleLogout}> {buttonDisplay} </button>
      </header>
    );
  }

  export default Logout;