export const addItemToCart = (currentCartItem, newCartItem) => {
  const isExistCartItem = currentCartItem.find(
    (item) => item.id === newCartItem.id
  );

  if (isExistCartItem) {
    return currentCartItem.map((item) =>
      item.id === newCartItem.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }

  return [...currentCartItem, { ...newCartItem, quantity: 1 }];
};
