import { useState } from "react";

import { getFavorites, saveFavorites } from "../utils/localStorage";

export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>(() => getFavorites());

  function toggleFavorite(city: string) {
    let updated: string[];

    if (favorites.includes(city)) {
      updated = favorites.filter((c) => c !== city);
    } else {
      updated = [...favorites, city];
    }

    setFavorites(updated);
    saveFavorites(updated);
  }

  function isFavorite(city: string) {
    return favorites.includes(city);
  }

  return { favorites, toggleFavorite, isFavorite };
}
