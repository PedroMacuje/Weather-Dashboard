import { WeatherCard } from "./WeatherCard";
import { LoadingSkeleton } from "./LoadingSkeleton";

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
  if (isLoading) return <LoadingSkeleton />;

  if (error) {
    return (
      <div className="p-4 bg-red-100 text-red-700 rounded-lg">{error}</div>
    );
  }

  if (weather) return <WeatherCard data={weather} />;
  return null;
}
