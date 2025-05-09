import Rick from "./Rick.png";

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <header className="relative h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
        <div className="relative max-w-4xl mx-auto z-10">
          <h1 className="text-7xl font-bold mb-6 animate-title-glow">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-rose-600 to-cyan-200">
              This is a test for frontend!
            </span>
          </h1>
          {/* Image Display */}
          <img src={Rick} alt="Rick Astley" className="max-w-1md rounded-lg shadow-lg" />
          {/* <p className="text-xl text-gray-300 mb-8 animate-fade-in-delay">
          </p> */}
        </div>
      </header>
    </div>
  );
}

export default App;