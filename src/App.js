import { Component } from "react";
import Products from "./components/Products";
import Layout from "./components/Layout";
import Title from "./components/Title";
import Navbar from "./components/Navbar";

class App extends Component {
  state = {
    products: [
      { name: "iPhone", price: 1500, img: "/products/iPhone.jpg" },
      { name: "airPods", price: 400, img: "/products/airPods.png" },
      { name: "iPad", price: 800, img: "/products/iPad.jpg" },
      { name: "macBook", price: 2500, img: "/products/macbook.jpg" },
    ],
    cart: [],
    isVisibleCart: false,
  };

  addToCart = (product) => {
    const { cart } = this.state;
    if (cart.find((x) => x.name === product.name)) {
      const newCart = cart.map((el) =>
        el.name === product.name
          ? {
              ...el,
              amount: el.amount + 1,
            }
          : el
      );
      return this.setState({ cart: newCart });
    }
    return this.setState({
      cart: this.state.cart.concat({
        ...product,
        amount: 1,
      }),
    });
  };

  toggleCartVisibility = () => {
    if (!this.state.cart.length) {
      return;
    }
    this.setState({ isVisibleCart: !this.state.isVisibleCart });
  };

  render() {
    const { isVisibleCart } = this.state;
    return (
      <div>
        <Navbar
          cart={this.state.cart}
          isVisibleCart={isVisibleCart}
          toggleCartVisibility={this.toggleCartVisibility}
        />
        <Layout>
          <Title />
          <Products addToCart={this.addToCart} products={this.state.products} />
        </Layout>
      </div>
    );
  }
}

export default App;
