import { Component } from "react";
import BubbleAlert from "./BubbleAlert";
import CartDetails from "./CartDetails";

const styles = {
  cart: {
    backgroundColor: "#359A2C",
    color: "#fff",
    border: "none",
    padding: "15px",
    borderRadius: "15px",
    cursor: "pointer",
  },
  bubble: {
    position: "relative",
    left: "12px",
    top: "20px",
  },
};

export default class Cart extends Component {
  render() {
    const { cart, isVisibleCart, toggleCartVisibility } = this.props;
    const amount = cart.reduce((acc, el) => acc + el.amount, 0);
    return (
      <div>
        <span style={styles.bubble}>
          {amount !== 0 ? <BubbleAlert value={amount} /> : null}
        </span>
        <button onClick={toggleCartVisibility} style={styles.cart}>
          Cart
        </button>
        {isVisibleCart ? <CartDetails cart={cart} /> : null}
      </div>
    );
  }
}
