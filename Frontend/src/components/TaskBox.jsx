import { useState } from "react";

export default function TaskBox(){
  const [title, setTitle] = useState('');
  const [time, setTime] = useState(Date.now);
  const [date, setDate] = useState("");
  const [task, setTask] = useState('');


  
  return (
    <>
  
<div className="min-h-screen bg-blue-950 p-3 sm:p-6">
  <section className="relative mx-auto min-h-[660px] max-w-4xl overflow-hidden rounded-[28px] border border-[#d9cdbb] bg-[#fffaf1] p-6 shadow-[0_3px_0_#d9cdbb] sm:p-8">

    <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#ffd8bf] opacity-80 blur-3xl" />

    <div className="pointer-events-none absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-[#d8f0d3] opacity-80 blur-3xl" />

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
          </div>


  </section>
</div>

    </>
  );
}
