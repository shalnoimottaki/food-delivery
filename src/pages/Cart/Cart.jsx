import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

const Cart = () => {
  const {
    cartItems,
    food_list,
    removeFromCart,
    getTotalCartAmount,
    getCartItemCount,
  } = useContext(StoreContext);
  const navigate = useNavigate();

  // تحقق مما إذا كانت السلة فارغة بناءً على عدد العناصر
  const isCartEmpty = getCartItemCount() === 0;

  return (
    <div className="cart">
      {isCartEmpty ? (
        <div className="empty-cart">
          <img src={assets.empty_item} alt="Empty Cart" />
          <Link to="/" className="back-home-link">Empty Cart ! Go to menu</Link>
        </div>
      ) : (
        <div className="cart-items">
          <div className="cart-items-title">
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
          {food_list.map((item) => {
            if (cartItems[item._id] > 0) {
              return (
                <div className="cart-items-item" key={item._id}>
                  <img src={item.image} alt={item.name} title={item.name} />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p className="cross" onClick={() => removeFromCart(item._id)}>
                    <img
                      src={assets.trash_icon}
                      alt="Delete it"
                      title="Move to trash"
                    />
                  </p>
                </div>
              );
            }
            return null; // تأكد من إرجاع null إذا لم يكن هناك عناصر لعرضها
          })}
        </div>
      )}
      {/* {!isCartEmpty && ( */}
      <div className="card-bottom">
        <div className="cart-total">
          <h2>Cart totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <div className="cart-total-details">
              <b>Total</b>
              <b>
                ${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}
              </b>
            </div>
          </div>
          <button onClick={() => navigate("/order")}>
            Proceed To Checkout
          </button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>If you have a promo code, Enter it here </p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="Promo Code" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
      {/* )} */}
    </div>
  );
};

export default Cart;
