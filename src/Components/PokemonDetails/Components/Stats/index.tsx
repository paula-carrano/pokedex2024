import { IPokemon } from "../../../../interfaces/interfaces";

interface Props {
  pokemon: IPokemon | null;
}

export const Stats = ({ pokemon }: Props) => {
  return (
    <div className="stats">
      <div className="item">
        <span>{pokemon?.weight} </span>
        <p>Weight</p>
      </div>
      <div className="item">
        <span>{pokemon?.height} </span>
        <p>Height</p>
      </div>
    </div>
  );
};
