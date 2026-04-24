import { WeatherCard } from "./WeatherCard";
import { LoadingSkeleton } from "./LoadingSkeleton";

import type { WeatherData } from "../types";
import ErrorMessage from "./ErrorMessage";

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

  if (error) return <ErrorMessage error={error} />;

  if (weather) return <WeatherCard data={weather} />;

  return null;
}
