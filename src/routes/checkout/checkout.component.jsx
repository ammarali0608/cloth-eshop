import { useContext } from "react";
import Button from "../../components/button/button.component";
import { CartContext } from "../../contexts/cart/cart.context";

const Checkout = () => {
  const { cartItems, addItemToCart } = useContext(CartContext);
  console.log("Checkout");
  return (
    <div>
      <h2>I am Checkout Page</h2>
      <div>
        {cartItems.map((cartItem) => {
          const { id, name, quantity, price } = cartItem;
          return (
            <div key={id}>
              <h2>{name}</h2>
              <span>{quantity}</span>
              <br />
              <span>decrement</span>
              <br />
              <span onClick={() => addItemToCart(cartItem)}>increment</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Checkout;
