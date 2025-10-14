import React, { createContext, useContext, useState } from 'react';

const UserProfileContext = createContext(null);

export function UserProfileProvider({ children }) {
  const [profile, setProfile] = useState({
    id: null,
    name: null,
    email: null,
    measurements: null, // attach measurements pipeline here later
  });

  const value = {
    profile,
    setProfile,
    updateProfile: (patch) => setProfile((p) => ({ ...p, ...patch })),
  };

  return (
    <UserProfileContext.Provider value={value}>
      {children}
    </UserProfileContext.Provider>
  );
}

export function useUserProfile() {
  const ctx = useContext(UserProfileContext);
  if (!ctx) throw new Error('useUserProfile must be used within UserProfileProvider');
  return ctx;
}