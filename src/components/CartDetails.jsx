import { Component } from "react/cjs/react.production.min";

const styles = {
  details: {
    backgroundColor: "#fff",
    position: "absolute",
    marginTop: "30px",
    boxShadow: "1px 5px 5px rgb(0,0,0,.3)",
    borderRadius: "5px",
    width: "300px",
    right: "50px",
  },
  ul: {
    margin: 0,
    padding: 0,
  },
  product: {
    listStyleType: "none",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 20px",
    borderBottom: "solid 1px #aaa",
  },
};

export default class CartDetails extends Component {
  render() {
    const { cart } = this.props;
    return (
      <div style={styles.details}>
        <ul style={styles.ul}>
          {cart.map((el) => (
            <li key={el.name} style={styles.product}>
              <img src={el.img} height="40" alt={el.name} />
              {el.name} <span>{el.amount}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
