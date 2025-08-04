import React from "react";
import { AppProvider } from "./AppContext";
import { NotificationProvider } from "./NotificationContext";
import { ProductProvider } from "./ProductContext";
import { CartProvider } from "./CartContext";
import { CouponProvider } from "./CouponContext";

interface AppProvidersProps {
  children: React.ReactNode;
}

export const AppProviders: React.FC<AppProvidersProps> = ({ children }) => {
  return (
    <AppProvider>
      <NotificationProvider>
        <ProductProvider>
          <CartProvider>
            <CouponProvider>{children}</CouponProvider>
          </CartProvider>
        </ProductProvider>
      </NotificationProvider>
    </AppProvider>
  );
};
