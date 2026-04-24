import WeatherCard from "./WeatherCard";
import LoadingSkeleton from "./LoadingSkeleton";
import ErrorMessage from "./ErrorMessage";

import { useFavorites } from "../hooks/useFavorites";

import type { WeatherData } from "../types";

interface CardDisplayProps {
  isLoading: boolean;
  weather: WeatherData | null;
  error: string;
}

export default function CardDisplay({
  error,
  isLoading,
  weather,
}: CardDisplayProps) {
  const { toggleFavorite, isFavorite } = useFavorites();

  if (isLoading) return <LoadingSkeleton />;

  if (error) return <ErrorMessage error={error} />;

  if (weather)
    return (
      <WeatherCard
        data={weather}
        isFavorite={isFavorite(weather.name)}
        onToggleFavorite={toggleFavorite}
      />
    );

  return null;
}
