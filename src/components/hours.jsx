const hours = [
    { day: "Monday", time: "12:00 PM - 3:00 PM" },
    { day: "Tuesday", time: "Closed" },
    { day: "Wednesday", time: "12:00 PM - 3:00 PM" },
    { day: "Thursday", time: "Closed"},
    { day: "Every Third Thursday", time: "5:00 PM - 7:00 PM" },
    { day: "Friday", time: "12:00 PM - 3:00 PM" },
    { day: "Saturday", time: "Closed" },
    { day: "Sunday", time: "Closed" }
];

const Hours = () => {
    return (
        <div className="hours">
            {hours.map((item) => (
                <div className="hourRow" key={item.day}>
                    <span>{item.day}</span>
                    <span>{item.time}</span>
                </div>
            ))}
        </div>
    );
};

export default Hours;