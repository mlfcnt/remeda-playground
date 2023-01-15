import React, { useRef } from "react";
import { map } from "remeda";
import { Pokemon } from "../App";
import { correspondToSearch } from "../lib";

type Props = {
  pokemons: Pokemon[];
  setPokemons: (pokemons: Pokemon[]) => void;
};

export const SearchInputByName = ({ pokemons, setPokemons }: Props) => {
  const inputPokemonNameRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <label htmlFor="search_by_name" style={{ marginRight: "20px" }}>
        Search by name
      </label>
      <input
        type="text"
        id="search_by_name"
        placeholder="pikachu"
        ref={inputPokemonNameRef}
        onChange={() => {
          if (!inputPokemonNameRef.current?.value?.length) {
            setPokemons(
              map(pokemons, (x) => ({
                ...x,
                highlighted: false,
              }))
            );
            return;
          }
          setPokemons(
            map(pokemons, (pokemon) => {
              if (
                correspondToSearch(
                  pokemon.name,
                  inputPokemonNameRef.current?.value || ""
                )
              ) {
                return {
                  ...pokemon,
                  highlighted: true,
                };
              } else
                return {
                  ...pokemon,
                  highlighted: false,
                };
            })
          );
        }}
      />
      <button
        style={{ marginLeft: "20px" }}
        onClick={() =>
          setPokemons(
            map(pokemons, (x) => ({
              ...x,
              highlighted: false,
            }))
          )
        }
      >
        Clear
      </button>
    </>
  );
};
