// import  from 'react';

import { Trash } from "lucide-react";

// import { useState } from "react";

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

const SingleSelectedPlayer = ({
  player,
  selectedPlayers,
  setSelectedPlayers,
  money,
  setMoney,
}) => {
  //   console.log(selectedPlayers);

  const handlePlayerCard = (player) => {
    const fillteredPlayer = selectedPlayers.filter(
      (selectedPlayer) => selectedPlayer.name != player.name,
    );

    // console.log(fillteredPlayer);
    setSelectedPlayers(fillteredPlayer);
    setMoney(money + player.market_value);
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
            onClick={() => handlePlayerCard(player)}
            type="button"
            aria-label={`Remove ${player.name}`}
            title={`Remove ${player.name}`}
            className="group relative inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-lg border border-rose-200 bg-rose-50 text-rose-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 hover:border-rose-400 hover:bg-rose-100 hover:text-rose-800 hover:shadow-[0_8px_18px_-8px_rgba(244,63,94,0.7)] active:translate-y-0 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-300"
          >
            <span className="absolute inset-0 -z-10 scale-0 rounded-lg bg-rose-200/60 transition-transform duration-300 group-hover:scale-100" />
            <Trash className="h-4 w-4 transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-125" />
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

export default SingleSelectedPlayer;
