// i} React from 'react';
//*reuseable card
// import { use } from "react";

// import { useState } from "react";
import SinglePlayerCard from "../playercards/SinglePlayerCard";

const AvailablePlayers = ({
  playerData,
  setMoney,
  money,
  selectedPlayers,
  setSelectedPlayers,
}) => {
  return (
    <section className="mx-auto max-w-330 px-4 py-8">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {playerData.map((player, index) => (
          <SinglePlayerCard
            key={index}
            player={player}
            setMoney={setMoney}
            money={money}
            selectedPlayers={selectedPlayers}
            setSelectedPlayers={setSelectedPlayers}
          ></SinglePlayerCard>
        ))}
      </div>
    </section>
  );
};

export default AvailablePlayers;
