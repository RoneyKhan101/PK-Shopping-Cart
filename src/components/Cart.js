import React from "react";
import { useSelector } from "react-redux";
import currencyFormatter from "currency-formatter";
import { BsDash, BsPlus, BsFillBackspaceFill } from "react-icons/bs";
import { useDispatch } from "react-redux";

const Cart = () => {
  const { products, totoalPrice, totalQuantities } = useSelector((state) => state.CartReducer);
  const dispatch = useDispatch();
  return (
    <div className="Cart">
      <div className="container">
        <h3>Your Cart</h3>
        {products.length > 0 ? (
          <>
            <div className="row">
              <div className="col-9">
                <div className="cart_heading">
                  <div className="row">
                    <div className="col-2">Pictrue</div>
                    <div className="col-2">Name</div>
                    <div className="col-2">Price</div>
                    <div className="col-2">Inc/Dec</div>
                    <div className="col-2">Total Price</div>
                    <div className="col-2">Remove</div>
                  </div>
                </div>
              </div>
              {products.map((product) => (
                <div className="row verticalAlign" key={product.id}>
                  <div className="col-2">
                    <div className="cart_image">
                      <img src={`/images/${product.image}`} alt={product.id} />
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="cart_name">{product.name}</div>
                  </div>

                  <div className="col-2">
                    <div className="cart_price">
                      {currencyFormatter.format(product.discountPrice, {
                        code: "USD",
                      })}
                    </div>
                  </div>
                  <div className="details_incDec">
                    <div className="details_click">
                      <span className="dec" onClick={()=>dispatch({type:'DEC', payload:product.id})} >
                        <BsDash />
                      </span>
                      <span className="quantity">{product.quantity}</span>
                      <span className="inc" onClick={()=>dispatch({type:'INC', payload:product.id})}>
                        <BsPlus />
                      </span>
                    </div>
                  </div>

                  <div className="col-2">
                    <div className="cart-total text-center">
                      {currencyFormatter.format(
                        product.discountPrice * product.quantity,
                        { code: "USD" }
                      )}
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="cart_remove" onClick={()=> dispatch({type:'REMOVE', payload:product.id})}>
                      <BsFillBackspaceFill />
                    </div>
                  </div>
                </div>
              ))}
              <div className="col-2">
                <div className="summary">
                  <div className="summary_heading">
                  </div>
                  Summary
                </div>
                <div className="pad">
                <div>
                  Total Items : {totalQuantities}
                </div>
                <div>
                  TOtal Price :  {currencyFormatter.format(totoalPrice, {
                        code: "USD",
                      })}
                </div>
                <div>
                  <button className="button pad2">Checkout</button>
                </div>
                </div>
                </div>
            </div>
          </>
        ) : (
          "your cart is empty !"
        )}
      </div>
    </div>
  );
};

export default Cart;
