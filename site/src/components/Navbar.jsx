import {Link} from "react-router-dom";
import "./Navbar.css";

function Navbar(){
    return (
        <nav className="navbar">
    <h2 className="logo">Космос</h2>

    <ul className="navlinks">
        <li><Link to="/">Главная</Link></li>
        <li><Link to="/Planets">Планеты</Link></li>
        <li><Link to="/Stars">Звезды</Link></li>
        <li><Link to="/Galaxies">Галактики</Link></li>
        <li><Link to="/About"></Link></li>
    </ul>
</nav>
    );
}

export default Navbar;