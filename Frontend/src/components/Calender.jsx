
function Calender() {
  const today = new Date();
  const daysName = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  const year = today.getFullYear();
  const month = today.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayInMonth = new Date(year, month, 1).getDay();

  const days = [];
  for (let i = 1; i <= daysInMonth; i++){
    days.push(i);
  }
  const emptyDays = [];
  for (let i = 0; i < firstDayInMonth; i++){
    emptyDays.push(i);
  }
  return(
    <>
      <section className="bg-blue-950 min-h-screen p-15 flex justify-center items-center">
        <div className="bg-amber-100 max-w-md rounded-2xl p-5 shadow-md rounded-2xl">
          <h1 className="p-2.5 text-2xl font-bold text-blue-950">
            {today.toLocaleDateString
              ("en-US", {
                month: "long",
                year:"numeric"
              }
            )}
          </h1>
           
            
          <div className="grid grid-cols-7 gap-5 text-center">
        
            {daysName.map((dayname) =>
              <div
                key={dayname}
                className="py-2 text-sm font-semibold text-blue-950">
                {dayname}
                </div>
            )}

            {emptyDays.map((day) => (
              <div key={day}>____</div>
            ))}

            {days.map((day) => (
              <div
                key={day}
               className={`flex aspect-square items-center justify-center rounded-lg px-5 bg-amber-300 ${
                day === today.getDate()
                  ? "bg-blue-950 font-bold text-white"
                  : "text-gray-700 hover:bg-blue-950 hover:text-amber-50"
              }`}
              >
                {day}
                </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Calender;
