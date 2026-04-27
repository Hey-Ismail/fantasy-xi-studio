// import React from "react";

import { use, useState } from "react";
import AvailablePlayers from "./AvailablePlayers";
import SelectedPlayer from "./SelectedPlayer";

const PlayerCards = ({ data, setMoney, money }) => {
  const playerData = use(data);

  const [selectedBtn, setSelectedBtn] = useState("available");

  const [selectedPlayers, setSelectedPlayers] = useState([]);
  return (
    <section className="mx-auto w-full max-w-330 px-4 pb-8">
      <div className="mb-5 flex justify-center items-center flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        {selectedBtn === "available" ? (
          <h2 className="text-2xl font-bold text-black">Available Players</h2>
        ) : (
          <h2 className="text-2xl font-bold text-black">
            Selected Players {selectedPlayers.length}/{playerData.length}
          </h2>
        )}

        <div className="inline-flex w-fit rounded-xl border border-white/20 bg-slate-900/70 p-1 shadow-[0_8px_20px_rgba(34,211,238,0.15)]">
          <button
            onClick={() => setSelectedBtn("available")}
            type="button"
            className={`rounded-lg px-4 py-2 text-sm transition-colors ${
              selectedBtn === "available"
                ? "bg-white text-slate-900"
                : "text-slate-300 hover:bg-white/10"
            }`}
          >
            Available
          </button>
          <button
            onClick={() => setSelectedBtn("selected")}
            type="button"
            className={`rounded-lg px-4 py-2 text-sm transition-colors ${
              selectedBtn === "selected"
                ? "bg-white text-slate-900"
                : "text-slate-300 hover:bg-white/10"
            }`}
          >
            Selected ({selectedPlayers.length})
          </button>
        </div>
      </div>

      {selectedBtn === "available" ? (
        <AvailablePlayers
          key={playerData.id}
          playerData={playerData}
          setMoney={setMoney}
          money={money}
          selectedPlayers={selectedPlayers}
          setSelectedPlayers={setSelectedPlayers}
        ></AvailablePlayers>
      ) : (
        <SelectedPlayer
          setMoney={setMoney}
          money={money}
          selectedPlayers={selectedPlayers}
          setSelectedPlayers={setSelectedPlayers}
        ></SelectedPlayer>
      )}
    </section>
  );
};

export default PlayerCards;
