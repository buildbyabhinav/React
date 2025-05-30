import { useContext } from "react";
import { CartContext } from "../store/cart-context";
// import { use } from "react";

export default function Cart(
  {
    // items,
    // onUpdateItemQuantity
  }
) {
  const {items, updateItemsInCart, addItemToCart} = useContext(CartContext);
  // const cartCtx = use(CartContext); // more flexible and can be used in if blocks also. shorter syntax can only be used react 19 and beyond.
  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;

  return (
    <div id="cart">
      {items.length === 0 && <p>No items in cart!</p>}
      {items.length > 0 && (
        <ul id="cart-items">
          {items.map((item) => {
            const formattedPrice = `$${item.price.toFixed(2)}`;

            return (
              <li key={item.id}>
                <div>
                  <span>{item.name}</span>
                  <span> ({formattedPrice})</span>
                </div>
                <div className="cart-item-actions">
                  <button
                    onClick={
                      () => updateItemsInCart(item.id, -1)
                      // onUpdateItemQuantity(item.id, -1)
                    }
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={
                      () => updateItemsInCart(item.id, 1)
                      // onUpdateItemQuantity(item.id, 1)
                    }
                  >
                    +
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
      <p id="cart-total-price">
        Cart Total: <strong>{formattedTotalPrice}</strong>
      </p>
    </div>
  );
}
