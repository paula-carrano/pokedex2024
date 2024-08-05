export const PokemonCard = () => {
  return (
    <div className="m-4 block rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 shadow-lg max-w-xs mx-auto">
      <div className="relative overflow-hidden">
        <img
          className="w-full h-32 object-cover rounded-t-lg"
          src="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
          alt=""
        />
      </div>
      <div className="p-4 flex items-center justify-between border-t border-gray-300 dark:border-gray-600">
        <span className="title_p text-xl font-medium leading-tight tracking-widest">
          Pikachu
        </span>
        <p className="text-gray-500 dark:text-gray-400"># ID</p>
      </div>
    </div>
  );
};
