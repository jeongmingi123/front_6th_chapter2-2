export const formatPrice = (
  price: number,
  isAdmin: boolean = false
): string => {
  if (isAdmin) {
    return `${price.toLocaleString()}원`;
  }

  return `₩${price.toLocaleString()}`;
};

// formatProductPrice는 formatPrice와 동일하므로 제거하고 formatPrice를 사용하도록 통일
