import { NavLink } from "react-router-dom";
import enneadrink1 from './icons/enneadrink1.jpg';
import enneadrink2 from './icons/enneadrink2.jpg';
import enneadrink3 from './icons/enneadrink3.jpg';
import enneadrink4 from './icons/enneadrink4.jpg';
import enneadrink5 from './icons/enneadrink5.jpg';
import enneadrink6 from './icons/enneadrink6.jpg';
import enneadrink7 from './icons/enneadrink7.jpg';
import enneadrink8 from './icons/enneadrink8.jpg';
import enneadrink9 from './icons/enneadrink9.jpg';

function DrinkNavBar() {
    return (
        <nav id="drinkNav" >
            <NavLink className="enlarge" to="/1">
                <img src={enneadrink1} alt="water" />
            </NavLink>
            <NavLink className="enlarge" to="/2">
                <img src={enneadrink2} alt="tea" />
            </NavLink>
            <NavLink className="enlarge" to="/3">
                <img src={enneadrink3} alt="sparkling water" />
            </NavLink>
            <NavLink className="enlarge" to="/4">
                <img src={enneadrink4} alt="espresso" />
            </NavLink>
            <NavLink className="enlarge" to="/5">
                <img src={enneadrink5} alt="latte" />
            </NavLink>
            <NavLink className="enlarge" to="/6">
                <img src={enneadrink6} alt="lemon water" />
            </NavLink>
            <NavLink className="enlarge" to="/7">
                <img src={enneadrink7} alt="smoothie" />
            </NavLink>
            <NavLink className="enlarge" to="/8">
                <img src={enneadrink8} alt="juice" />
            </NavLink>
            <NavLink className="enlarge" to="/9">
                <img src={enneadrink9} alt="hot cocoa" />
            </NavLink>

        </nav>
    );
}

export default DrinkNavBar;