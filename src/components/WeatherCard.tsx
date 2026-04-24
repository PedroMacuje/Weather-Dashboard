import type { WeatherData } from "../types";

interface WeatherCardProps {
  data: WeatherData;
}

export function WeatherCard({ data }: WeatherCardProps) {
  return (
    <div className="rounded-2xl bg-white/50 backdrop-blur-md shadow-xl p-6 border border-white/20">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">{data.name}</h2>
          <p className="text-sm text-gray-500">{data.weather[0].description}</p>
        </div>

        <img
          src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          alt={data.weather[0].description}
          className="w-16 h-16"
        />
      </div>

      <div className="flex items-center justify-between mb-6">
        <p className="text-5xl font-bold text-gray-900">
          {Math.round(data.main.temp)}°
        </p>

        <div className="text-right text-sm text-gray-500">
          <p>Sensação</p>
          <p className="text-gray-700 font-medium">
            {Math.round(data.main.feels_like)}°
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 text-sm">
        <div className="bg-white/60 rounded-lg p-3">
          <p className="text-gray-500">Humidade</p>
          <p className="font-semibold text-gray-800">{data.main.humidity}%</p>
        </div>

        <div className="bg-white/80 rounded-lg p-3">
          <p className="text-gray-500">Vento</p>
          <p className="font-semibold text-gray-800">{data.wind.speed} m/s</p>
        </div>
      </div>
    </div>
  );
}
