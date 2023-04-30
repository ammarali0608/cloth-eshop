import { useContext } from "react";
import { CartContext } from "../../contexts/cart/cart.context";
import {
  CheckoutItemContainer,
  Arrow,
  ImageContainer,
  Name,
  Price,
  Quantity,
  Value,
  RemoveButton,
} from "./checkout-item.styles";

const CheckoutItem = ({ cartItem }) => {
  const { clearItemFromCart, addItemToCart, removeItemFromCart } =
    useContext(CartContext);
  const { name, quantity, price, imageUrl } = cartItem;

  const clearItemHandler = () => clearItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);
  const removeItemHandler = () => removeItemFromCart(cartItem);
  return (
    <CheckoutItemContainer className="checkout-item-container">
      <ImageContainer className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <Name className="name">{name}</Name>
      <Quantity className="quantity">
        <Arrow className="arrow" onClick={removeItemHandler}>
          &#10094;
        </Arrow>
        <Value className="value">{quantity}</Value>
        <Arrow className="arrow" onClick={addItemHandler}>
          &#10095;
        </Arrow>
      </Quantity>
      <Price className="price">{price}</Price>
      <RemoveButton onClick={clearItemHandler} className="remove-button">
        &#10005;
      </RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
