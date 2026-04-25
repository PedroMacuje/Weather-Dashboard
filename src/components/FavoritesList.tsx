interface ListProps {
  favorites: string[];
  handleSearch: (city: string) => void;
}

export default function FavoritesList({ favorites, handleSearch }: ListProps) {
  return (
    favorites.length > 0 && (
      <div>
        <p className="text-sm text-gray-600">Favoritos</p>

        <div className="flex flex-wrap gap-2 mt-2">
          {favorites.map((city) => (
            <button
              key={city}
              onClick={() => handleSearch(city)}
              className="px-3 py-1 bg-white/70 backdrop-blur-sm rounded-full text-sm
              hover:bg-white hover:scale-105 active:scale-95 transition-all duration-200"
            >
              {city}
            </button>
          ))}
        </div>
      </div>
    )
  );
}
