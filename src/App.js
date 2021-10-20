import { Component } from "react";
import Products from "./components/Products";
import Layout from "./components/Layout";

class App extends Component {
  state = {
    products: [
      { name: "iPhone", price: 1500, img: "/products/iPhone.jpg" },
      { name: "airPods", price: 400, img: "/products/airPods.png" },
      { name: "iPad", price: 800, img: "/products/iPad.jpg" },
      { name: "macBook", price: 2500, img: "/products/macbook.jpg" },
    ],
  };
  render() {
    return (
      <div>
        <Layout>
          <Products addToCart={() => {}} products={this.state.products} />
        </Layout>
      </div>
    );
  }
}

export default App;
