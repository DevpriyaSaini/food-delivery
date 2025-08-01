import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext(null);

const url = "https://food-delivery-backend-sydz.onrender.com";

const StoreContextProvider = (props) => {
  const [food_list, setfoodlist] = useState([]);

  const [cartItems, setCarditem] = useState({});
  const [token, setToken] = useState("");
  const addToCart = async (itemId) => {
    if (!cartItems[itemId]) {
      setCarditem((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCarditem((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
    if (token) {
      await axios.post(
        url + "/api/cart/add",
        { itemId },
        { headers: { token } }
      );
    }
  };

  const removeCart = async (itemId) => {
    setCarditem((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if (token) {
      await axios.post(
        url + "/api/cart/remove",
        { itemId },
        { headers: { token } }
      );
    }
  };

  const gettotal = () => {
    let totalammount = 0;

    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let iteminfo = food_list.find(
          (product) => String(product._id) === String(item)
        );

        if (!iteminfo) {
          console.warn(`Product with ID ${item} not found in food_list.`);
          continue;
        }

        totalammount += iteminfo.Price * cartItems[item];
      }
    }

    return totalammount;
  };

  async function fetchfood(event) {
    const responce = await axios.get(url + "/api/food/list");
    setfoodlist(responce.data.data);
  }

  async function fetchcart(token) {
    const responce = await axios.post(
      url + "/api/cart/get",
      {},
      { headers: { token } }
    );
    setCarditem(responce.data.cartData);
  }

  useEffect(() => {
    console.log(cartItems);
  }, [cartItems]);

  useEffect(() => {
    async function loadData() {
      await fetchfood();
      if (localStorage.getItem("token")) {
        setToken(localStorage.getItem("token"));
        await fetchcart(localStorage.getItem("token"));
      }
    }
    loadData();
  }, []);
  const contextValue = {
    food_list,
    cartItems,
    setCarditem,
    addToCart,
    removeCart,
    gettotal,
    token,
    setToken,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
