// import React from "react";

// import SinglePlayerCard from "./SinglePlayerCard";
import SingleSelectedPlayer from "./SingleSelectedPlayer";

const SelectedPlayer = ({
  selectedPlayers,
  setSelectedPlayers,
  money,
  setMoney,
}) => {
  // console.log(selectedPlayers);

  return (
    <div className="grid md:grid-cols-4  grid-cols-1 gap-2.5 ">
      {selectedPlayers.length === 0 ? (
        <div className="col-span-full flex min-h-55 items-center justify-center text-center flex-col">
          <h2 className="text-4xl mb-5">
            No player has been <span className="text-yellow-400">selected</span>
          </h2>
          <p className="text-3xl">
            Go to the <span className="text-yellow-400">avaliable</span> page
          </p>
        </div>
      ) : (
        selectedPlayers.map((player, index) => {
          return (
            // <SinglePlayerCard key={index} player={player}></SinglePlayerCard>
            <SingleSelectedPlayer
              player={player}
              key={index}
              selectedPlayers={selectedPlayers}
              setMoney={setMoney}
              money={money}
              setSelectedPlayers={setSelectedPlayers}
            ></SingleSelectedPlayer>
          );
        })
      )}
      {/* <button>delete</button> */}
    </div>
  );
};

export default SelectedPlayer;
