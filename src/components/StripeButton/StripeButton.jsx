import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_51J4F0sJstaipPlLq5Co3CVO5WwYycZYlWQXLixa1NjnzW347MloXsU2nT3IENWa5xheMlqdWr2JTsgJI3nENV3I500VCVxlB2G";

  const onToken = token => {
    console.log(token);
    alert("Payment Successful")
  }
  return (
    <StripeCheckout 
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton;