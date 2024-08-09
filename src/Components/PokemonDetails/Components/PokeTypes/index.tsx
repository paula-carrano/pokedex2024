import { IPokemon } from "../../../../interfaces/interfaces";

interface Props {
  pokemon: IPokemon | null;
}

export const PokeTypes = ({ pokemon }: Props) => {
  return (
    <div>
      {pokemon?.types.map(({ type: { name } }) => (
        <div key={name}>{name}</div>
      ))}
    </div>
  );
};
