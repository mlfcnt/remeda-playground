import { usePokemons } from "./lib";
import "./App.css";
import { SearchInputByName } from "./components/SearchInputByName";
import { PokemonList } from "./components/PokemonList";

export type Pokemon = {
  name: string;
  url: string;
  highlighted: boolean;
};

function App() {
  const { pokemons, setPokemons } = usePokemons();
  if (!pokemons?.length) return <p>No pokemons </p>;

  return (
    <div className="App">
      <h1>Pokemons</h1>
      <SearchInputByName pokemons={pokemons} setPokemons={setPokemons} />
      <PokemonList pokemons={pokemons} />
    </div>
  );
}

export default App;
