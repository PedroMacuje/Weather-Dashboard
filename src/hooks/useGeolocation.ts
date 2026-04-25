import { useState } from "react";
import { getWeatherByCoord } from "../services/weatherAPI";
import type { WeatherData } from "../types";

export function useGeolocation() {
  const [isLocating, setIsLocating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function getCurrentWeather(): Promise<WeatherData | null> {
    if (!navigator.geolocation) {
      setError("Geolocalização não suportada");
      return null;
    }

    setIsLocating(true);
    setError(null);

    return new Promise((resolve) => {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const { latitude, longitude } = position.coords;
            const data = await getWeatherByCoord(latitude, longitude);
            resolve(data);
          } catch (error) {
            setError("Erro ao buscar geolocalização");
            resolve(null);
          } finally {
            setIsLocating(false);
          }
        },
        () => {
          setError("permissão negada");
          setIsLocating(false);
          resolve(null);
        },
      );
    });
  }
  return { getCurrentWeather, isLocating, error };
}
