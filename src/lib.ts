import { useEffect, useState } from "react";
import { forEach, map } from "remeda";
import { fetchPokemons } from "./api";
import { Pokemon } from "./App";
import { z } from "zod";

const PokemonSchema = z.object({
  name: z.string(),
  url: z.string(),
});

const validatePokemons = (pokemons: Pokemon[]) => {
  forEach(pokemons, (pokemon) => {
    PokemonSchema.parse(pokemon);
  });
};

export const usePokemons = () => {
  const [pokemons, setPokemons] = useState<Pokemon[] | null>([]);

  useEffect(() => {
    fetchPokemons().then((pokemons) => {
      validatePokemons(pokemons);
      setPokemons(
        map(pokemons, (x) => ({
          name: x.name,
          url: x.url,
          highlighted: false,
        }))
      );
    });
  }, []);

  return { pokemons, setPokemons };
};

export const correspondToSearch = (
  pokemonName: Pokemon["name"],
  searchedValue: string
) => pokemonName.toLowerCase().includes(searchedValue.toLowerCase());
