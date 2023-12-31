import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './_CartItem.scss';

const CartItem = ({ id, name, price, quantity }) => {
  const { removeItem } = useContext(CartContext);

  const subtotal = price * quantity;

  const handleRemoveItem = () => {
    removeItem(id);
  };

  return (
    <div className="CartItem">
      <p className="CartItem__Name">{name}</p>
      <p className="CartItem__Price">Precio: ${price}</p>
      <p className="CartItem__Quantity">Cantidad: {quantity}</p>
      <p className="CartItem__Subtotal">Subtotal: ${subtotal}</p>
      <p className="CartItem__RemoveIcon" onClick={handleRemoveItem}>
        <FontAwesomeIcon icon={faTrash} />
      </p>
    </div>
  );
};

export default CartItem;


