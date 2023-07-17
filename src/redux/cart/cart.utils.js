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

export const removeItemFromCart = (currentCartItem, removeCartItem) => {
  const existCartItem = currentCartItem.find(
    (item) => item.id === removeCartItem.id
  );

  if (existCartItem.quantity === 1) {
    return currentCartItem.filter((item) => item.id !== removeCartItem.id);
  }

  return currentCartItem.map((item) =>
    item.id === removeCartItem.id
      ? { ...item, quantity: item.quantity - 1 }
      : item
  );
};