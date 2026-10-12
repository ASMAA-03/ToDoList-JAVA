import { useState } from "react";
import { useEffect } from "react";
import { getTasks,addTask as saveTask } from "../services/todoservice";
const colors = [
  { name: 'green', value: '#b9e3bd' },
  { name: 'orange', value: '#ffbd96' },
  { name: 'pink', value: '#f5c1ca' },
  { name: 'yellow', value: '#f7e49a' },
  { name: 'blue', value: '#b6def1' },
  { name: 'purple', value: '#d6c6f1' },
]

export default function TaskBox() {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('2026-10-12')
  const [time, setTime] = useState('09:00')
  const [color, setColor] = useState(colors[0].value);
  const [tasks, setTask] = useState([]);

  async function addTask() {
    if (!title.trim()) return
    const savedTask = await saveTask(title.trim());
    setTask([...tasks, savedTask]);

    setTitle("");

  }
  useEffect(() => {
    async function loadTasks() {
      const data = await getTasks();
      setTask(data);
    }

    loadTasks();
  }, []);

  return (
    <>
  
<div className="min-h-screen bg-[#f7efe1] p-3 sm:p-6">
  <section className="relative mx-auto min-h-[660px] max-w-4xl overflow-hidden rounded-[28px] border border-[#d9cdbb] bg-[#fffaf1] p-6 shadow-[0_3px_0_#d9cdbb] sm:p-8">

    <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#ffd8bf] opacity-80 blur-3xl" />

    <div className="pointer-events-none absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-[#c0edb7] opacity-80 blur-3xl" />

    <div className="relative flex w-full items-center justify-between gap-4 text-center">

      <div className="flex flex-col gap-1.5 text-left">
        <h1 className="font-bold">New Task</h1>

        <span>
          What's the one thing that would make today great?
        </span>
      </div>

      <button className="rounded-3xl bg-blue-950 px-5 text-amber-50">
        Focus
      </button>

    </div>

    <div className="relative mt-8">
      <label className="mb-2 block font-mono text-[15px]">
        TASK
      </label>

      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && addTask()}
        placeholder="Write a tiny intention..."
        className="mb-6 h-[60px] w-full rounded-full border border-[#d9cdbb] bg-[#f8f2e7] px-5 text-base outline-none transition focus:border-[#b99a79] focus:ring-2 focus:ring-[#e8d8c5]"
      />
    </div>
          <div className="mb-7 grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
            <label>
              Time
            </label>
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.time)}
                className="h-12 w-full rounded-full border border-[#d9cdbb] bg-[#f8f2e7] px-4 outline-none focus:border-[#b99a79]"
            >
              </input>
            </div>

             <div>
            <label>
              Date
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.date)}
                className="h-12 w-full rounded-full border border-[#d9cdbb] bg-[#f8f2e7] px-4 outline-none focus:border-[#b99a79]"
            >
              </input>
            </div>
            <div className="flex flex-col gap-5 mt-2 ">

                          <div>
              <button
            type="button"
            onClick={addTask}
            className="rounded-full bg-[#17100c] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#49352a] active:scale-95"
          >
            + &nbsp; Add task
            </button>
            </div>
            
            <div>
             <label className="mb-3 block font-mono text-[10px]">
            COLOR
          </label>
          <div className="mb-7 flex gap-2">
            {colors.map((item) => (
              <button
                key={item.name}
                type="button"
                aria-label={item.name}
                title={item.name}
                onClick={() => setColor(item.value)}
                className={`h-9 w-9 rounded-full border ${
                  color === item.value
                    ? 'scale-105 border-[#241b17] ring-1 ring-[#241b17]'
                    : 'border-[#d9cdbb] hover:scale-105'
                }`}
                style={{ backgroundColor: item.value }}
              />
            ))}
              </div>
</div>

            </div>
<div></div>
              <div className="flex flex-col gap-4 ">
             
              <label className="font-semibold">
                  %Preview
              </label>
              <div
                 value={colors.values}
              className="flex min-w-72 rounded-2xl p-2 justify-between "
              style={{backgroundColor:color}}
              >
              <input
                  placeholder={title} 
                >  
              </input>
               <span className=" text-xs p-1">
                {date.slice(5).replace('-', ':')} in {time}
               </span>
              </div>
               
</div>
          </div>


  </section>
</div>

    </>
  );
}
