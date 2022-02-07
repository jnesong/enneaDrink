import { NavLink } from 'react-router-dom';

function DescriptionNavBar () {

        return (
        <nav id="descriptionNav">
            <NavLink className="enlarge" to="/about"> About </NavLink>
            <NavLink className="enlarge" to="/strengths"> Strengths </NavLink>
            <NavLink className="enlarge" to="/weaknesses"> Weaknesses </NavLink>
            <NavLink className="enlarge" to="/health"> Health Levels </NavLink>
        </nav>
    );

}

export default DescriptionNavBar