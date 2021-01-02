import React from "react";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <img
        src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/PrimeRewards/LP_Revamp/PC_Header_Banner._CB468631809_.jpg"
        alt=""
        className="checkout_ad"
      />
      {basket?.length === 0 ? (
        <div>
          <h2>Your Amazon Cart is empty.</h2>
          <p className="">
            Your shopping cart is waiting. Give it purpose – fill it with
            groceries, clothing, household supplies, electronics and more.
            Continue shopping on the Amazon.in homepage, learn about today's
            deals, or visit your Wish List.
          </p>
        </div>
      ) : (
        <div>
          <h2 className="checkout__title">Your Shopping Basket</h2>
          {/* list out all of the checkout products */}
          {/* {console.log(basket[0].item.price)} */}
          {basket.map((item) => {
            console.log(item);
          })}
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Checkout;
