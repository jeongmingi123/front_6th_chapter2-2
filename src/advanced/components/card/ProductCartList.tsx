import { ProductWithUI } from "../../types";
import { ProductCartItem } from "./ProductCartItem";
import { useCartContext } from "../../contexts/CartContext";
import { useAdminContext } from "../../contexts/AdminContext";

interface ProductCartListProps {
  filteredProducts: ProductWithUI[];
}

export const ProductCartList = ({ filteredProducts }: ProductCartListProps) => {
  const { getRemainingStock, addToCart } = useCartContext();
  const { isAdmin } = useAdminContext();

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProducts.map((product) => {
          const remainingStock = getRemainingStock(product);

          return (
            <ProductCartItem
              key={product.id}
              product={product}
              remainingStock={remainingStock}
              onAddToCart={addToCart}
              isAdmin={isAdmin}
            />
          );
        })}
      </div>
    </>
  );
};
