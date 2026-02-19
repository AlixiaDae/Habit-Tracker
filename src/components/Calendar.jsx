export default function Calendar() {
  const days = [];

  let currentDate = new Date();

  let month = currentDate.toLocaleString("en-US", { month: "long" });

  for (let i = 0; i < 7; i++) {
    // Get the weekday name (e.g., "Sunday")
    const dayName = currentDate.toLocaleDateString("en-US", {
      weekday: "short",
    });
    days.push(dayName);
    // Move to the next day
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return (
    <div className="calendar-body">
      <h2 className="text-center">{month}</h2>
      <div className="p-2">
        <ul className="grid grid-cols-9 border-3 rounded-sm gap-0.5 bg-black">
          <div className="text-center col-span-2 p-1 bg-white">Habits</div>
          {days.map((day, index) => (
            <li className="text-center p-1 bg-white" key={index}>
              {day}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
