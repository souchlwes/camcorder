import React, { createContext, useContext, useState } from 'react';

const CollectionContext = createContext(null);

export function CollectionProvider({ children }) {
  const [favorites, setFavorites] = useState([]); // product IDs or objects

  const value = {
    favorites,
    addFavorite: (item) =>
      setFavorites((list) => (list.find((x) => x.id === item.id) ? list : [...list, item])),
    removeFavorite: (id) => setFavorites((list) => list.filter((x) => x.id !== id)),
    clearFavorites: () => setFavorites([]),
  };

  return (
    <CollectionContext.Provider value={value}>
      {children}
    </CollectionContext.Provider>
  );
}

export function useCollection() {
  const ctx = useContext(CollectionContext);
  if (!ctx) throw new Error('useCollection must be used within CollectionProvider');
  return ctx;
}