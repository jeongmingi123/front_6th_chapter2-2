import React, { createContext, useContext, useState, ReactNode } from "react";

interface AppContextType {
  isAdmin: boolean;
  setIsAdmin: (isAdmin: boolean) => void;
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
  selectedCoupon: any | null;
  setSelectedCoupon: (coupon: any | null) => void;
}

const AppContext = createContext<AppContextType>({
  isAdmin: false,
  setIsAdmin: () => {},
  searchTerm: "",
  setSearchTerm: () => {},
  selectedCoupon: null,
  setSelectedCoupon: () => {},
});

export const useAppContext = () => {
  const context = useContext(AppContext);
  return context;
};

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCoupon, setSelectedCoupon] = useState<any | null>(null);

  const value = {
    isAdmin,
    setIsAdmin,
    searchTerm,
    setSearchTerm,
    selectedCoupon,
    setSelectedCoupon,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
