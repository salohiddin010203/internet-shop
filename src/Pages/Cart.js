import React, { useContext,useState } from "react";
import { MyContext } from "../Context/My-context";
import CartItem from "../Components/Cart-item/Cart-item";
import Order from "../Components/Order/Order";

const Cart = () => {

  const [modalShow,setModalShow]=useState(false)
  const { cart, deleteToCard } = useContext(MyContext);
  const onOrder=()=>{
    setModalShow(true)
  }
  return (
    <div>
      <div className="d-flex flex-wrap justify-content-between gap-4 mt-4">
      {cart.map((elem, index) => {
        return (
          <CartItem
            onClick={() => deleteToCard(index)}
            children="Delete to Cart"
            {...elem}
          />
        );
      })}
    </div>
      <div className="cart-btn">
        <Order show={modalShow} onHide={()=>setModalShow(false)} />
      <button className="knopka"  onClick={onOrder}>Оформить Товар <i class="fa-solid fa-cart-shopping"></i>  </button>
      </div>
    </div>
  );
};


export default Cart;
