import React, { createContext, useContext, useState, useMemo } from 'react';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]); // {id, name, size, qty, price}

  const addItem = (item) => {
    setItems((list) => {
      const idx = list.findIndex((x) => x.id === item.id && x.size === item.size);
      if (idx >= 0) {
        const next = [...list];
        next[idx] = { ...next[idx], qty: next[idx].qty + (item.qty || 1) };
        return next;
      }
      return [...list, { ...item, qty: item.qty || 1 }];
    });
  };

  const removeItem = (id, size) => setItems((list) => list.filter((x) => !(x.id === id && x.size === size)));
  const updateQty = (id, size, qty) =>
    setItems((list) =>
      list.map((x) => (x.id === id && x.size === size ? { ...x, qty: Math.max(1, qty) } : x))
    );
  const clearCart = () => setItems([]);

  const totals = useMemo(() => {
    const subtotal = items.reduce((sum, x) => sum + (x.price || 0) * (x.qty || 1), 0);
    return { subtotal };
  }, [items]);

  const value = { items, addItem, removeItem, updateQty, clearCart, totals };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}