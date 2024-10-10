import Player from "./components/Player.jsx";
import TimerChallange from "./components/timerChallange.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallange title="Easy" targetTime={2} />
        <TimerChallange title="Not Easy" targetTime={5} />
        <TimerChallange title="Getting tough" targetTime={10} />
        <TimerChallange title="Pros Only" targetTime={15} />
      </div>
    </>
  );
}

export default App;
