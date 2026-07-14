import {Supporters} from "../assets/data/supporters.js";

const Home = () => {

    return (
        <div className="homeDiv">
            <title>Home</title>
            <h1>Our Mission</h1>
            <p>A community based organization serving Gananoque and area, providing food to those in need.  Everyone will be treated with respect, dignity and protection of privacy.</p>
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

export default Home;