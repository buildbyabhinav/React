import { forwardRef, useContext, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';
import Cart from './Cart';
// import { CartContext } from '../store/cart-context';

const CartModal = forwardRef(function Modal(
  { 
    // cartItems, onUpdateCartItemQuantity,
     title, actions },
  ref
) {

  // const cartCtx = useContext(CartContext)

  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog id="modal" ref={dialog}>
      <h2>{title}</h2>
      <Cart 
      // items={cartItems} onUpdateItemQuantity={onUpdateCartItemQuantity}
       />
      <form method="dialog" id="modal-actions">
        {actions}
      </form>
    </dialog>,
    document.getElementById('modal')
  );
});

export default CartModal;
