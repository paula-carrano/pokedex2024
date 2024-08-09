import { useNavigate } from "react-router-dom";
import { IPokemon } from "../../../../interfaces/interfaces";

interface Props {
  pokemon: IPokemon | null;
}

export const HeaderCard = ({ pokemon }: Props) => {
  //const navigate = useNavigate();

  return (
    <header>
      <div>
        <span>{pokemon?.name}</span>
      </div>
      <p>#{pokemon?.id}</p>
    </header>
  );
};
