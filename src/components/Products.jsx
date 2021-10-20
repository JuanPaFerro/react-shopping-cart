import { Component } from "react";
import Product from "./Product";

const styles = {
  productsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
};

class Products extends Component {
  render() {
    const { products, addToCart } = this.props;

    return (
      <div style={styles.productsContainer}>
        {products.map((p) => (
          <Product addToCart={addToCart} key={p.name} product={p} />
        ))}
      </div>
    );
  }
}

export default Products;
