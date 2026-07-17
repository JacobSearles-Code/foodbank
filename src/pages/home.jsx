import {Supporters} from "../assets/data/supporters.js";
import Waterfront_Concert_Schedule from "../assets/data/Waterfront_Concerts_Schedule.pdf"
import GroupPhoto from "../assets/data/FoodbankGroup.avif";

const Home = () => {

    return (
        <div className="homeDiv">
            <title>Home</title>
            <h1>About us</h1>
            <p>Established in 1987 by Audrey Jackson and the Gananoque Ministerial Committee (a group of Gananoque religious groups) and some dedicated volunteers.  The Gananoque and Area Food Bank operates on the premise that in a world where we have so much, no one should go hungry.<br/>
                We are an emergency community service providing food to our community as needed and as available.<br/>
                We are a registered non-profit charitable organization governed by a volunteer Board of Directors who are assisted by a group of committed volunteers. We are a non-denominational, non-political organization sustained solely by private donations and we do not receive any government funding.</p>
            <h1>Our Mission</h1>
            <p>A community based organization serving Gananoque and area, providing food to those in need.  Everyone will be treated with respect, dignity and protection of privacy.</p>
            <h3>We are accepting food and monetary donations at the Waterfront Concert Series</h3>
            <a href={Waterfront_Concert_Schedule} target="_blank">Click here to view the concert schedule!</a>
            <div className="photoCard">
                <h1>Gananoque Food Bank Volunteers</h1>
                <img className="groupPhoto" src={GroupPhoto} />
            </div>
            <h2>Our Supporters</h2>
            <p>We at The Gananoque Food Bank gratefully appreciate and acknowledges the support of our community. </p>
            <div className="logoDiv">
                {Supporters.map((supporter) => (
                <a key={supporter.id} href={supporter.website} target="_blank" rel="noopener noreferrer" className="logoCard">
                    <img src={supporter.logo} alt={supporter.name} />
                </a>
                ))}
            </div>
        </div>
    )
}

{ /* https://www.instagram.com/gananoquefoodbank/?hl=en */ }
{ /* https://www.facebook.com/gananoquefoodbank/ */ }

export default Home;