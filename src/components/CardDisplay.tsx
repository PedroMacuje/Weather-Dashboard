import WeatherCard from "./WeatherCard";
import LoadingSkeleton from "./LoadingSkeleton";
import ErrorMessage from "./ErrorMessage";

import type { WeatherData } from "../types";

interface CardDisplayProps {
  isLoading: boolean;
  weather: WeatherData | null;
  error: string;
  toggleFavorite: (city: string) => void;
  isFavorite: (city: string) => boolean;
}

export default function CardDisplay({
  error,
  isLoading,
  weather,
  isFavorite,
  toggleFavorite,
}: CardDisplayProps) {
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
