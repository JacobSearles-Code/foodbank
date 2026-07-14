import {Link} from "react-router-dom";
import GanLogo from "../assets/logos/GananoqueFoodBandPfp.png"

const Heading = () => {

    return (
        <header className="heading">
            <Link to="/" className="titleLink" ><img src={GanLogo} /></Link>
            <nav className="headerNav">
                <Link className="navLink" to="/">Home</Link>
                <Link className="navLink" to="/expect">What to Expect</Link>
                <Link className="navLink" to='/help'>How to Help</Link>
                <Link className="navLink" to="/about">About Us</Link>
                <Link className="navLink" to="/contact">Contact</Link>
                <Link className="navLink" to='https://www.canadahelps.org/en/dn/47481' target="_blank">Donate</Link>
            </nav>
        </header>
    )
}

export default Heading;