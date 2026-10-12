import Calender from "../components/Calender";
import TaskBox from "../components/TaskBox";
function Home() {
  return (
    <>
       <div className="flex justify-between w-full max-h-full">
        <div className="bg-amber-500 w-full">
          <TaskBox/>
        </div>
        <Calender/> 
      </div>

    </>
  );
}
export default Home;