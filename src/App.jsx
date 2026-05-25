import { CloudRain } from "lucide-react";

function App() {
  return (
    <main
      className="w-full min-h-screen bg-no-repeat bg-cover bg-bottom flex"
      style={{ backgroundImage: "url(/rain.jpeg)" }}
    >
      <div className="flex flex-col flex-1/2 justify-end p-6">
        <p className="text-white text-8xl flex items-start">
          <span>23</span>
          <span className="text-base">°C</span>
        </p>
        <p className="text-white text-2xl">Jakarta Raya</p>
        <p className="text-white text-base">10:10</p>
      </div>
      <div className="flex-1/2 flex flex-col text-white p-6">
        <div className="flex-1/3 backdrop-blur-xs backdrop-grayscale rounded-4xl p-6">
          <p>Thunderstorms expected around 00:00</p>
          <div className="h-px w-full bg-white/25" />
          <div className="flex justify-between">
            <div className="flex flex-col items-center justify-center">
              <span>Now</span>
              <CloudRain />
              <p>
                <span>23</span>
                <span>°C</span>
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <span>Now</span>
              <CloudRain />
              <p>
                <span>23</span>
                <span>°C</span>
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <span>Now</span>
              <CloudRain />
              <p>
                <span>23</span>
                <span>°C</span>
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <span>Now</span>
              <CloudRain />
              <p>
                <span>23</span>
                <span>°C</span>
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <span>Now</span>
              <CloudRain />
              <p>
                <span>23</span>
                <span>°C</span>
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <span>Now</span>
              <CloudRain />
              <p>
                <span>23</span>
                <span>°C</span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex-2/3"></div>
      </div>
    </main>
  );
}

export default App;
