import wretch from "wretch";
import { Pokemon } from "./App";

export const fetchPokemons = async (
  amount = 10000,
  offset = 0
): Promise<Pokemon[]> => {
  return wretch(
    `https://pokeapi.co/api/v2/pokemon?limit=${amount}&offset=${offset}`
  )
    .get()
    .json((json) => {
      return json.results;
    });
};
