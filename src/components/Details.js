import React, { useEffect } from "react";
import currencyFormatter from "currency-formatter";

import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { BsDash, BsPlus } from "react-icons/bs";
import { useState } from "react";
const Details = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.ProductReducer);
  const [quantity, setQuantity] = useState(1);
  console.log(product);
  useEffect(() => {
    dispatch({ type: "NEWPRODUCT", id });
  }, [id]);

  const decQuantity= ()=> {
      if(quantity > 1){
        setQuantity(quantity-1)
      }
  }
  return (
    <div>
      <div className="container mt-100">
        <div className="row">
          <div className="col-6">
            <div className="details_image">
              <img src={`/images/${product.image}`}  alt={product.title}/>
            </div>
          </div>
          <div className="col-6">
            <div className="details_name">{product.name}</div>
            <div className="details_prices">
              <span className="details_actual">
                {currencyFormatter.format(product.price, { code: "USD" })}
              </span>
              <span className="details_discount">
                {currencyFormatter.format(product.discountPrice, {
                  code: "USD",
                })}
              </span>
            </div>
            <div className="detials_info">
              <div className="details_incDec">
                <div className="details_click">
                  <span className="dec" onClick={()=>decQuantity()}>
                    <BsDash />
                  </span>
                  <span className="quantity">{quantity}</span>
                  <span className="inc" onClick={() => setQuantity(quantity+1)}>
                    <BsPlus />
                  </span>
                  <button className="btn-default" onClick={()=> dispatch({type: 'ADD_TO_CART', payload: {product,quantity}})} >add to cart</button>
                </div>
              </div>
              
              <div className="details_p">
                <h4>Details</h4>
                {product.desc}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
