import Waterfront_Concert_Schedule from "../assets/data/Waterfront_Concerts_Schedule.pdf";

const Help = () => {

    return (
        <div className="helpDiv">
            <title>How to Help</title>
            <h1>How to Help</h1>
            <p>The Gananoque Food Bank is grateful for our very generous community.  At this time we are in need of Food Pantry items.  Please see the sections below for more information.</p>
            <h3>We are accepting food and monetary donations at the Waterfront Concert Series</h3>
            <a href={Waterfront_Concert_Schedule} target="_blank">Click here to view the concert schedule!</a>
            <div className="infoCard">
            <h2>Food Drives</h2>
            <p>The Gananoque and  Area Food Bank is often in need of pantry items for our clients.  One of the ways we are able to provide these necessary items is through Volunteer Food Drives.<br/>
                If you would like to do a fundraiser for us please contact Ganfoodbank@gmail.com.or 613-382-4434 to find out more information such as our currently needed items and the timing for drop off of Food Drive donations.</p>
            </div>
            <div className="infoCard">
                <h2>Volunteer</h2>
                <p>We offer a variety of volunteer opportunities. Some of the positions we have are:</p>
                <ul>
                    <li>Volunteer Driver</li>
                    <li>Food Bank Greeter</li>
                    <li>Assisting Clients with Food Bank Shopping</li>
                    <li>Board Member</li>
                    <li>Drive Assistant</li>
                </ul>
                <p>Call to find our more information about how you can get involved.  613-382-4434</p>
            </div>
            <div className="infoCard">
                <h2>Fundraisers</h2>
                <p>In the past we have also been the recipients of cash donations from In Memoriam donations, car washes, hockey games, concerts and craft sale attendance fees. If you would like to do a fundraiser for us please contact Ganfoodbank@gmail.com or call us at 613-382-4434.</p>
            </div>
            <div className="infoCard">
            <h2>Monetary Donations</h2>
            <p>We are fortunate to receive many cash donations which helps us to purchase food and equipment needed at the Gananoque and Area Food Bank. We can accept monetary donations through etransfer at ganfoodbank@gmail.com  or through Canada Helps.  If you are interested in donating to the Gananoque Food Bank please select the Donate button at the top of the page</p>
            </div>
            <h2>Thank you very much for considering our Food Bank for your donation!</h2>
        </div>
    )
}

export default Help;