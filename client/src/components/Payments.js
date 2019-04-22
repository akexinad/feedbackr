import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';

class Payments extends Component {
  render() {
    return(
      <StripeCheckout
        name="FeedBackr"
        description="USD 5 x 5 email credits"
        amount={500}
        token={token => console.log(token)}
        stripeKey={process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}
      >
        <button className="btn">ADD CREDITS</button>
      </ StripeCheckout>
    )
  }
}

export default connect()(Payments)
