import Calender from "../components/Calender";

function Home() {
  return (
    <>
       <div className="flex justify-between w-full max-h-full">
        <div className="bg-amber-500 w-full"></div>
        <Calender/> 
      </div>
    </>
  );
}
export default Home;