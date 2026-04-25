import { useState } from "react";

import SearchBar from "./components/SearchBar";
import CardDisplay from "./components/CardDisplay";
import FavoritesList from "./components/FavoritesList";

import { getWeather } from "./services/weatherAPI";

import type { WeatherData } from "./types";

import { useFavorites } from "./hooks/useFavorites";
import { useGeolocation } from "./hooks/useGeolocation";

import "./App.css";

function App() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { favorites, isFavorite, toggleFavorite } = useFavorites();
  const { getCurrentWeather, isLocating, error: geoError } = useGeolocation();

  const handleSearch = async (city: string) => {
    try {
      setIsLoading(true);
      setError("");
      const data = await getWeather(city);
      setWeather(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Aconteceu um erro");
      setWeather(null);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUserLocation = async () => {
    const data = await getCurrentWeather();
    if (data) {
      setWeather(data);
      setError("");
    } else if (geoError) {
      setError(geoError);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 py-8 px-4">
      <div className="max-w-md mx-auto space-y-4">
        <h1 className="text-gray-700 text-6xl font-bold text-center mb-8">
          Painel do Clima
        </h1>
        <SearchBar onSearch={handleSearch} isLoading={isLoading} />
        <button
          onClick={handleUserLocation}
          className="w-full py-2 rounded-lg bg-white/70 backdrop-blur-sm 
            hover:bg-white hover:scale-[1.02] active:scale-[0.98]
            transition-all duration-200"
        >
          📍 Usar minha localização
        </button>
        {isLocating && (
          <div className="flex items-center justify-center gap-2 text-gray-500 text-sm">
            <div className="w-4 h-4 border-2 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
            <span>Obtendo localização...</span>
          </div>
        )}
        <FavoritesList favorites={favorites} handleSearch={handleSearch} />
        <CardDisplay
          isLoading={isLoading}
          weather={weather}
          error={error}
          isFavorite={isFavorite}
          toggleFavorite={toggleFavorite}
        />
      </div>
    </div>
  );
}

export default App;
