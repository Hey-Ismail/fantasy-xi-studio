import { useState } from "react";
import { toast } from "react-toastify";

const PersonIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-4 w-4 text-slate-600"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 12a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Zm0 2c-4.2 0-8 2.2-8 5v1h16v-1c0-2.8-3.8-5-8-5Z" />
  </svg>
);

const FlagIcon = () => (
  <svg
    viewBox="0 0 24 24"
    className="h-4 w-4 text-slate-500"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M6 3h2v2h8l-1.4 2L16 9H8v11H6V3Z" />
  </svg>
);

const SinglePlayerCard = ({
  player,
  setMoney,
  money,
  selectedPlayers,
  setSelectedPlayers,
}) => {
  // console.log(player.market_value);

  const [selectedPlayer, setSelectedPlayer] = useState(false);

  const handleChossenPlayer = () => {
    let newCoin = money - player.market_value;
    if (0 <= newCoin) {
      setMoney(money - player.market_value);
    } else {
      // alert("this");
      toast.warning(`You dont have enough money to buy ${player.name}`);
      toast.info("claim free credits to buy players");
      return;
    }

    toast(`${player.name} is selected`);
    setSelectedPlayer(true);
    setSelectedPlayers([...selectedPlayers, player]);
  };
  return (
    <article
      key={player.id}
      className="rounded-xl border border-slate-200 bg-white p-3 text-slate-800 shadow-sm"
    >
      <div>
        <img
          src={player.player_image}
          alt={player.name}
          className="h-40 w-full rounded-lg bg-slate-200 object-cover"
        />
      </div>

      <div className="mt-3 space-y-3 text-sm">
        <div className="flex items-center gap-2">
          <PersonIcon />
          <h3 className="line-clamp-1 text-[15px] font-bold">{player.name}</h3>
        </div>

        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <FlagIcon />
            <span className="line-clamp-1">{player.country?.name}</span>
          </div>
          <span className="rounded-md bg-slate-100 px-2 py-1 text-[11px] font-medium text-slate-700">
            {player.position?.club}
          </span>
        </div>

        <div className="h-px w-full bg-slate-200" />

        <div className="space-y-1 text-xs">
          <div className="flex items-center justify-between gap-2">
            <span className="font-semibold">Club</span>
            <span className="line-clamp-1 text-slate-600">
              {player.club?.name}
            </span>
          </div>
          <div className="flex items-center justify-between gap-2">
            <span className="font-semibold">Country Position</span>
            <span className="text-slate-600">{player.position?.country}</span>
          </div>
          <div className="flex items-center justify-between gap-2">
            <span className="font-semibold">Jersey</span>
            <span className="text-slate-600">
              #{player.jersey_number?.club}
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between gap-2 border-t border-slate-200 pt-2 text-xs">
          <span className="font-semibold">Price: € {player.market_value}M</span>
          <button
            onClick={handleChossenPlayer}
            type="button"
            disabled={selectedPlayer}
            className={`rounded-md border px-2.5 py-1 font-medium transition-colors ${
              selectedPlayer === true
                ? "border-green-500 bg-green-50 text-green-700"
                : "border-slate-300 text-slate-700 hover:bg-slate-50"
            }`}
          >
            {selectedPlayer === true ? "Selected" : "Choose Player"}
          </button>
        </div>

        <div className="space-y-1 rounded-md bg-slate-50 p-2 text-[11px] text-slate-600">
          <p>
            Club Stats: {player.achievements?.club?.goals} goals,{" "}
            {player.achievements?.club?.assists} assists
          </p>
          <p>
            Country Stats: {player.achievements?.country?.goals} goals,{" "}
            {player.achievements?.country?.assists} assists
          </p>
          <p>
            Trophies: {player.achievements?.club?.trophies?.length || 0} club,{" "}
            {player.achievements?.country?.trophies?.length || 0} country
          </p>
        </div>
      </div>
    </article>
  );
};

export default SinglePlayerCard;
