import React from "react";
import { map } from "remeda";
import { Pokemon } from "../App";

export const PokemonList = ({ pokemons }: { pokemons: Pokemon[] }) => {
  return (
    <ul>
      {map(pokemons, (pokemon) => (
        <div key={pokemon.name} style={{ display: "inline" }}>
          <span
            style={{
              color: pokemon.highlighted ? "gold" : "inherit",
              fontSize: pokemon.highlighted ? "120%" : "100%",
            }}
          >
            {pokemon.name}
          </span>
          <span> | </span>
        </div>
      ))}
    </ul>
  );
};
