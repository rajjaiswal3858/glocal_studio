import React, { createContext, useContext } from 'react';

const DeviceContext = createContext(null);

export function DeviceProvider({
  value,
  children,
}) {
  return (
    <DeviceContext.Provider value={value}>
      {children}
    </DeviceContext.Provider>
  );
}

export const useDevice = () => {
  const context = useContext(DeviceContext);
  if (!context) {
    throw new Error('useDevice must be used within a DeviceProvider');
  }
  return context;
};
