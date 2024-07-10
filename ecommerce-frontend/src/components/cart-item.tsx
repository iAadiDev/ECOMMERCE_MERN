import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

type CartItemsProps ={
    cartItem : any;
};


const CartItem = ({cartItem}:CartItemsProps) => {
    /*
    productId: "123",
photo: "https://m.media-amazon.com/images/I/316ArzLeJ2L._SY445_SX342_QL70_FMwebp_.jpg",

name: "Macbook",
price:3000,
quantity : 4,
stock : 55,
*/


    const{photo,productId,name,price,quantity} =cartItem;
  return (
    <div className="cart-item">
      <img src={photo} alt={name}/>
      <article>
        <Link to ={`/product/${productId}`}> {name}</Link>
      </article>

      <div>
        <button>  -</button>
        <p>{quantity}</p>
        <button>+</button>
      </div>
      <button>
        <FaTrash/>
        </button>
    </div>
  )
};

export default CartItem;
