import {
  HeaderCard,
  PokeTypes,
  Title,
  Stats,
  BaseStats,
} from "./Components/index";

export const PokemonDetails = () => {
  return (
    <div className="bg">
      <HeaderCard /*pokemon={pokemon}*/ />
      <div className="info">
        <img
          /*src={
          pokemon?.sprites?.other?.dream_world?.front_default ||
          pokemon?.sprites?.front_default
        }*/
          alt="" //{pokemon?.name}
        />
        <PokeTypes /*pokemon={pokemon}*/ />
        <Title content="About" />
        <Stats /*pokemon={pokemon}*/ />
        <Title content="Base Stats" />
        <BaseStats /*pokemon={pokemon}*/ />
      </div>
    </div>
  );
};
