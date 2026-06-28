import {Link} from "react-router-dom";
import "../styles/Navbar.css";
function Navbar(){
    return(
        <nav className="navbar">
            <h2 className="theme">Космос</h2>
            <ul className="nav-links">
                <li><Link to ="/">Главная</Link></li>
                <li><Link to="/Planets">Планеты</Link></li>
                <li><Link to="/Stars">Звезды</Link></li>
                <li><Link to="/Galaxies">Галактики</Link></li>
                <li><Link to="/Missions">Миссии</Link></li>
                <li><Link to="/About">О проекте</Link></li>
                <li><Link to="/Test">Мини тест</Link></li>
            </ul>
        </nav>
    )
}
export default Navbar;