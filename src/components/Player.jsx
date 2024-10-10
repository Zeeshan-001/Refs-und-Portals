import { useRef, useState } from "react";

export default function Player() {
  const playerName = useRef();
  const [entPlayer, setEntPlayer] = useState("");

  const handleClick = () => {
    setEntPlayer(playerName.current.value);
  };

  return (
    <section id="player">
      <h2> Welcome {entPlayer ? entPlayer : "unknown"}</h2>

      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
