import { Component } from "react";
import Button from "./Button";

const styles = {
  productBody: {
    border: "solid 1px #eee",
    boxShadow: "0 5px 5px rgb(0,0,0, .1",
    width: "20%",
    padding: "10px 15px",
    borderRadius: "5px",
  },
  productImg: {
    width: "100%",
  },
};

class Product extends Component {
  render() {
    const { product, addToCart } = this.props;
    return (
      <div style={styles.productBody}>
        <img src={product.img} style={styles.productImg} alt={product.name} />
        <h3>{product.name}</h3>
        <p>{product.price}</p>
        <Button onClick={() => addToCart(product)}>Add to Cart</Button>
      </div>
    );
  }
}

export default Product;
