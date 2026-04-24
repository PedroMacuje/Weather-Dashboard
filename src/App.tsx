import { useState } from "react";

import SearchBar from "./components/SearchBar";
import CardDisplay from "./components/CardDisplay";
import FavoritesList from "./components/FavoritesList";

import { getWeather } from "./services/weatherAPI";

import type { WeatherData } from "./types";

import { useFavorites } from "./hooks/useFavorites";

import "./App.css";

function App() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { favorites, isFavorite, toggleFavorite } = useFavorites();

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

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 py-8 px-4">
      <div className="max-w-md mx-auto space-y-4">
        <h1 className="text-gray-700 text-6xl font-bold text-center mb-8">
          Painel do Clima
        </h1>
        <SearchBar onSearch={handleSearch} isLoading={isLoading} />
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
