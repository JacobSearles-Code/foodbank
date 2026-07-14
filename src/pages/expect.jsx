import ItemList from "../components/itemlist.jsx";

const Expect = () => {
    return (
        <div className="expectDiv">
            <title>What to Expect</title>
            <h1>What To Expect When You Visit</h1>
                <p>The Gananoque & Area Food Bank provides approximately 7-days of food each month to individuals and families in need living in our area.
                Our goal is to provide you with safe and nutritious food which meets your dietary needs and food preferences at the best quality food we can obtain. After your intake is completed, a Volunteer will assist in helping with your grocery shop.</p>
                <div className="infoCard">
                    <h2>Identification</h2>
                    <h3>Only one type required</h3>
                    <p><i>ID will be required for all persons in the household.</i></p>
                    <ul>
                        <li>Birth Certificate</li>
                        <li>Photo ID</li>
                        <li>Driver's License</li>
                    </ul>
                </div>
                <div className="infoCard">
                    <h2>Proof of Address</h2>
                    <p><i>Required for everyone over the age of 18 living in the household.</i></p>
                    <ul>
                        <li>Driver's License</li>
                        <li>Currently Dated Bill with name and address</li>
                    </ul>
                </div>
            <h3><i>Note: Every 6 months you will be required to update your file.</i></h3>
            <p>You will be asked to provide information about your primary source of income, the number in your household and any special needs of the family.
                If you have registered in the past then your information will be on file and can be updated.</p>
                    <h2>Items We Provide</h2>
            <p>There may at times be free items that can be taken. Some items may have a limit.</p>
                    <ItemList />
        </div>
    )
}

export default Expect;