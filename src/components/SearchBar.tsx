import { useState } from "react";

interface SearchBarProps {
  onSearch: (city: string) => void;
  isLoading: boolean;
}

export default function SearchBar({ isLoading, onSearch }: SearchBarProps) {
  const [city, setCity] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (city.trim()) {
      onSearch(city);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Coloque o nome de uma cidade..."
        className="flex-1 p-3 rounded-lg border border-gray-300
        focus:outline-none focus:ring-2 focus:ring-blue-500
        transition-all duration-200"
      />
      <button
        type="submit"
        disabled={isLoading}
        className="w-[120px] py-1 bg-blue-500 text-white rounded-lg duration-300 
          ease-in-out hover:bg-blue-600 disabled:bg-gray-400 
          disabled:cursor-not-allowed transition-colors"
      >
        {isLoading ? "Bucando..." : "Buscar"}
      </button>
    </form>
  );
}
