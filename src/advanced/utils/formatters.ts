export const formatPrice = (
  price: number,
  productId?: string,
  isAdmin: boolean = false
): string => {
  if (isAdmin) {
    return `${price.toLocaleString()}원`;
  }

  return `₩${price.toLocaleString()}`;
};

export const formatProductPrice = (
  price: number,
  productId?: string,
  isAdmin: boolean = false
): string => {
  if (isAdmin) {
    return `${price.toLocaleString()}원`;
  }

  return `₩${price.toLocaleString()}`;
};
