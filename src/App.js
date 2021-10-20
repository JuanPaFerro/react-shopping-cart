import { Component } from "react";
import Products from "./components/Products";

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
        <Products addToCart={() => {}} products={this.state.products} />
      </div>
    );
  }
}

export default App;
