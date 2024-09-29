import Metting from "./Metting";
import Slider from "./Slider";
async function Home() {
  return (
    <div className="flex flex-col md:flex-col lg:flex-row items-center justify-between w-full h-full max-w-8xl gap-5">
      {/* left side */}
      {/* new metting and link  */}
      <div className="flex-1 h-full flex flex-col justify-center text-left md:p-4 lg:p-4 lg:mr-4 space-y-4 lg:space-y-6">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Meeting and Video call for everyone <br />
          <strong>with </strong>
          <span className="text-blue-500">ChatVibe</span>
        </h1>
        {/* new metting button and link input */}
        <Metting />
      </div>
      {/* Right Section - Auto-Sliding Image/Slider */}
      <div>
        <Slider />
      </div>
    </div>
  );
}

export default Home;
