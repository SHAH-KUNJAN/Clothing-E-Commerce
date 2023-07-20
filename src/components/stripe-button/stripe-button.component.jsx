import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const stripePrice = price * 100;
  const publishableKey =
    "pk_test_51NVqlpSB08Gb7iaLHYUPo2zp4z0jjEOyhdc5zwtQZsdSLEzAuUhPXq6CndupwHubKKn8gbIZPiBZUpIpKrH46NOv00sJTiz2ku";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="Kunjan Clothing LTD."
      billingAddress
      shippingAddress
      description={`Your Total is $${price}`}
      amount={stripePrice}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
