// i} React from 'react';

// import { use } from "react";
import Card from "../ui/Card";
const AvailablePlayers = ({
  playerData,
  setMoney,
  money,
  selectedPlayers,
  setSelectedPlayers,
}) => {
  return (
    <div>
      <Card
        playerData={playerData}
        setMoney={setMoney}
        money={money}
        selectedPlayers={selectedPlayers}
        setSelectedPlayers={setSelectedPlayers}
      ></Card>
    </div>
  );
};

export default AvailablePlayers;
