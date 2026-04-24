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

function EmptyState() {
  return (
    <div className="text-center text-gray-500 mt-10">
      <p>🔍 Busque uma cidade para ver o clima</p>
    </div>
  );
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

  if (!weather) return <EmptyState />;

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
