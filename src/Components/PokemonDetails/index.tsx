import { IPokemon } from "../../interfaces/interfaces";
import { HeaderCard, PokeTypes, Title, Stats, BaseStats } from "./Components";

interface Props {
  pokemon: IPokemon | null;
}

export const PokemonDetails = ({ pokemon }: Props) => {
  return (
    <div className="m-4 bg-gray-50 p-4 rounded-lg shadow-lg max-w-md mx-auto">
      <HeaderCard pokemon={pokemon} />
      <div className="info mt-4">
        <img
          src={
            pokemon?.sprites?.other?.dream_world?.front_default ||
            pokemon?.sprites?.front_default
          }
          alt={pokemon?.name}
          className="w-full h-auto rounded-lg border border-gray-300 shadow-sm"
        />
        <div className="mt-4">
          <PokeTypes pokemon={pokemon} />
        </div>
        <div className="mt-4">
          <Title content="About" />
          <Stats pokemon={pokemon} />
        </div>
        <div className="mt-4">
          <Title content="Base Stats" />
          <BaseStats pokemon={pokemon} />
        </div>
      </div>
    </div>
  );
};
