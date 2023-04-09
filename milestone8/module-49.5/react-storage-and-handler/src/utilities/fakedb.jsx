const addToDb = (key) => {
  let shoppingCart;
  const storedCart = localStorage.getItem("shopping-cart");

  if (storedCart) shoppingCart = JSON.parse(storedCart);

  const quantity = shoppingCart[key];

  if (quantity) shoppingCart[key] = +quantity + 1;
  else shoppingCart[key] = 1;

  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
  //   if (shoppingCartObj) {
  //     shoppingCartObj = JSON.parse(shoppingCartObj);
  //     const existing1 = shoppingCartObj[key];

  //     if (existing1) shoppingCartObj[key] = +existing1 + 1;
  //     else shoppingCartObj[key] = 1;

  //     const shoppingCartString = JSON.stringify(shoppingCartObj);
  //     localStorage.setItem("shopping-cart", shoppingCartString);
  //   } else {
  //     shoppingCart = {};
  //     shoppingCart[key] = 1;
  //     const shoppingCartString = JSON.stringify(shoppingCart);
  //     localStorage.setItem("shopping-cart", shoppingCartString);
  //   }
};

const removeFromDb = (id) => {
  const storedCart = localStorage.getItem("shopping-cart");
  const shoppingCart = JSON.parse(storedCart);
  if (id in shoppingCart) {
    delete shoppingCart[id];
    localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
  }
};

const deleteShoppingCart = () => {
  localStorage.removeItem("shopping-cart");
};

export { addToDb, removeFromDb, deleteShoppingCart };
