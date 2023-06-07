import { createContext, useContext, useState, useEffect } from "react";

interface CartProviderInterface {
  children: JSX.Element;
}

interface CartInterface {
  bottles: {
    name: string;
    capacity: string | undefined;
    quantity: number;
    price: number;
    totalSum: number;
  };
  boxes: {
    name: string;
    capacity: string | undefined;
    quantity: number;
    price: number;
    totalSum: number;
  };
}

interface InitialStateInterface {
  cart: CartInterface;
  totalItems: number;
  totalCartSum: number;
  removeItem: (product: string) => void;
  updateOrder: (newQuantity: number, product: string) => void;
  resetOrder: () => void;
  calcTotalSumPerProduct: (product: string) => void;
  updateCapacity: (capacity: string | undefined) => void;
  increaseBottle: () => void;
  increaseBox: () => void;
  decreaseBottle: () => void;
  decreaseBox: () => void;
  changeLang: (e: React.MouseEvent<HTMLElement>) => void;
  lang: string | null;
  cartVisible: boolean;
  openCart: () => void;
}

function getLocalStorage() {
  let cart = localStorage.getItem("cart");

  if (cart) {
    return JSON.parse(localStorage.getItem("cart")!);
  } else {
    return {
      bottles: {
        name: "Bottle",
        capacity: "1.0",
        quantity: 0,
        price: 1.6,
        totalSum: 0,
      },
      boxes: {
        name: "Box",
        capacity: "1.0",
        quantity: 0,
        price: 9.6,
        totalSum: 0,
      },
    };
  }
}

const CartContext = createContext<InitialStateInterface>({
  cart: getLocalStorage(),
  totalItems: 0,
  totalCartSum: 0,
  removeItem: (product: string) => {},
  updateOrder: (newQuantity: number, product: string) => {},
  resetOrder: () => {},
  calcTotalSumPerProduct: (product: string) => {},
  updateCapacity: (capacity: string | undefined) => {},
  increaseBottle: () => {},
  increaseBox: () => {},
  decreaseBox: () => {},
  decreaseBottle: () => {},
  changeLang: () => {},
  lang: "ENG",
  cartVisible: false,
  openCart: () => {},
});

export const AppProvider = ({ children }: CartProviderInterface) => {
  const [cart, setCart] = useState<CartInterface>(getLocalStorage());
  const [lang, setLang] = useState<string | null>("ENG");
  const [cartVisible, setCartVisible] = useState<boolean>(false);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    updateOrder(cart.bottles.quantity, "bottles");
    calcTotalSumPerProduct("bottles");
    updateOrder(cart.boxes.quantity, "boxes");
    calcTotalSumPerProduct("boxes");
  }, [cart.bottles.quantity, cart.boxes.quantity]);

  function openCart() {
    setCartVisible((prevState) => !prevState);
  }

  function changeLang(e: React.MouseEvent<HTMLElement>) {
    const newLang = (e.target as HTMLElement)?.textContent;
    setLang(newLang);
  }

  function resetOrder() {
    setCart({
      bottles: {
        name: "Bottle",
        capacity: "1.0",
        quantity: 0,
        price: 1.6,
        totalSum: 0,
      },
      boxes: {
        name: "Box",
        capacity: "1.0",
        quantity: 0,
        price: 9.6,
        totalSum: 0,
      },
    });
  }

  function increaseBottle() {
    setCart((prevState) => {
      let tempAmount = prevState.bottles.quantity + 1;

      if (tempAmount > 9) {
        tempAmount = 9;
      }

      return {
        ...prevState,
        bottles: {
          ...prevState.bottles,
          quantity: tempAmount,
        },
      };
    });
  }

  function decreaseBottle() {
    setCart((prevState) => {
      let tempAmount = prevState.bottles.quantity - 1;

      if (tempAmount < 0) {
        tempAmount = 0;
      }

      return {
        ...prevState,
        bottles: {
          ...prevState.bottles,
          quantity: tempAmount,
        },
      };
    });
  }

  function increaseBox() {
    setCart((prevState) => {
      let tempAmount = prevState.boxes.quantity + 1;

      if (tempAmount > 9) {
        tempAmount = 9;
      }

      return {
        ...prevState,
        boxes: {
          ...prevState.boxes,
          quantity: tempAmount,
        },
      };
    });
  }

  function decreaseBox() {
    setCart((prevState) => {
      let tempAmount = prevState.boxes.quantity - 1;

      if (tempAmount < 0) {
        tempAmount = 0;
      }

      return {
        ...prevState,
        boxes: {
          ...prevState.boxes,
          quantity: tempAmount,
        },
      };
    });
  }

  function updateOrder(newQuantity: number, product: string) {
    const updatedCart: CartInterface = { ...cart };

    if (product === "bottles") {
      updatedCart.bottles.quantity = newQuantity;
      setCart(updatedCart);
      return;
    }

    updatedCart.boxes.quantity = newQuantity;
    setCart(updatedCart);
    return;
  }

  function removeItem(product: string) {
    const updatedCart: CartInterface = { ...cart };

    if (product === "bottles") {
      updatedCart.bottles.quantity = 0;
      updatedCart.bottles.totalSum = 0;
      setCart(updatedCart);
      return;
    }

    updatedCart.boxes.quantity = 0;
    updatedCart.boxes.totalSum = 0;
    setCart(updatedCart);
    return;
  }

  function updateCapacity(capacity: string | undefined) {
    const updatedCart: CartInterface = { ...cart };
    updatedCart.bottles.capacity = capacity;
    updatedCart.boxes.capacity = capacity;
    setCart(updatedCart);
  }

  const totalItems: number =
    Number(cart.bottles.quantity) + Number(cart.boxes.quantity);

  function calcTotalSumPerProduct(product: string) {
    const updatedCart: CartInterface = { ...cart };

    if (product === "bottles") {
      updatedCart.bottles.totalSum =
        updatedCart.bottles.quantity * updatedCart.bottles.price;
      setCart(updatedCart);
      return;
    }

    updatedCart.boxes.totalSum =
      updatedCart.boxes.quantity * updatedCart.boxes.price;
    setCart(updatedCart);
    return;
  }

  const totalCartSum: number =
    Number(cart.bottles.totalSum) + Number(cart.boxes.totalSum);

  const context = {
    cart,
    totalCartSum,
    resetOrder,
    removeItem,
    updateOrder,
    totalItems,
    calcTotalSumPerProduct,
    updateCapacity,
    increaseBottle,
    increaseBox,
    decreaseBottle,
    decreaseBox,
    changeLang,
    lang,
    cartVisible,
    openCart,
  };

  return (
    <CartContext.Provider value={context}>{children}</CartContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(CartContext);
};
