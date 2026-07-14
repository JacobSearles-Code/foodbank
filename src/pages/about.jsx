import Hours from "../components/hours.jsx"

const About = () => {

    return (
        <div className="aboutDiv">
            <title>About Us</title>
            <h1>About Us</h1>
            <p>
                Established in 1987 by Audrey Jackson and the Gananoque Ministerial Committee(a group of Gananoque
                religious groups) and some dedicated volunteers. The Gananoque and Area Food Bank operates on the
                premise that in a world where we have so much, no one should go hungry.<br/><br/>
                We are an emergency community service providing food to our community as needed and as
                available.<br/><br/>
                We are a registered non-profit charitable organization governed by a volunteer Board of Directors who
                are assisted by a group of committed volunteers. We are a non-denominational, non-political organization
                sustained solely by private donations and we do not receive any government funding.
            </p>
            <div className="hoursCard">
                <h3>Hours of Operation</h3>
                { /* Hour Div goes here */ }
                <Hours />
            </div>
            <div className="locateDiv">
                <div className="mapDiv">
                    <iframe
                        title="google map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2853.8122991792297!2d-76.154687!3d44.334361799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccd4514188c382f%3A0x94d1091a481ed9e0!2sGananoque%20Food%20Bank!5e0!3m2!1sen!2sca!4v1783449675983!5m2!1sen!2sca"
                        width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy"
                        referrerPolicy="strict-origin-when-cross-origin" />
                </div>
                <div className="infoDiv">
                    <p>If you have any questions or concerns, please stop by, or reach out and speak with us!</p>
                    <p><span>&#128222;</span> 613-382-4434</p>
                    <p><span>&#x1F4CD;</span> 497 King St. E., Gananoque, ON K7G 1G9</p>
                    <p><span>&#x2709;</span> Ganfoodbank@gmail.com</p>
                    <p>Charitable Number BN: 890949043RR0001</p>
                </div>

            </div>
        </div>
    )
}

export default About;