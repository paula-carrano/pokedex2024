import { IPokemon } from "../../../../interfaces/interfaces";

interface Props {
  pokemon: IPokemon | null;
}

export const BaseStats = ({ pokemon }: Props) => {
  const maxStat = 255;

  const baseStatsNames = {
    hp: "hp",
    attack: "atk",
    defense: "def",
    "special-attack": "satk",
    "special-defense": "sdef",
    speed: "spd",
  };

  return (
    <div className="baseStats">
      {/* @ts-ignore */}
      {pokemon?.stats?.map(({ base_stat, stat: { name } }) => {
        return (
          <div key={name} className="item">
            <span>
              {/* @ts-ignore */}
              {baseStatsNames[name]}
            </span>
            <div>
              <p>0{base_stat}</p>
              <div>
                <div />
                <div
                  style={{
                    opacity: "1",
                    width: `${(base_stat / maxStat) * 100}%`,
                  }}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
