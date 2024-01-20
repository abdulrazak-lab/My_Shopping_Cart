import React from "react";
import Cart from "./Components/Cart";
import Navbar from "./Components/Navbar";

class App extends React.Component {

  constructor () {
    super();
    this.state = {
        products: [
            {
                price: 199,
                title: "Mobile Phone",
                qty: 1,
                img: "",
                id: 1
            },
            {
                price: 1982,
                title: "Laptop",
                qty: 13,
                img: "",
                id: 2
            },
            {
                price: 109,
                title: "Watch",
                qty: 1,
                img: "",
                id: 3
            }
        ]
    }
}

handleIncreaseQuantity = (product) => {
    const {products} = this.state;
    const index = products.indexOf(product);
    products[index].qty += 1;
    this.setState({
    products
    });
}

handleDecreaseQuantity = (product) => {
    const {products} = this.state;
    const index = products.indexOf(product)
    if(products[index].qty === 0) {
        return;
    }
    products[index].qty -= 1;
    this.setState({
        products
    })
} 

handleDeleteProdcuts = (id) => {
    const {products} = this.state;
    const items = products.filter((item) => item.id !== id);
    this.setState({
        products: items
    })
}

getCartCount = () => {
  const {products} = this.state;

  let count = 0;

  products.forEach((product) => {
    count += product.qty
  })

  return count;
}

getCartTotal = () => {
  const {products} = this.state;
  let cartTotal = 0;
  products.map((product) => {
    cartTotal = cartTotal + product.qty * product.price

  })
  return cartTotal;
}

  render () {
    const {products} = this.state
  return (
    <div className="App">
      <Navbar count={this.getCartCount()} />
      <Cart 
        products={products}
       onIncreaseQuantity={this.handleIncreaseQuantity}
       onDecreaseQuantity={this.handleDecreaseQuantity} 
       onDeleteProdcuts={this.handleDeleteProdcuts}
      />
      <div style={{padding: 10, fontSize: 20}}>TOTAL: {this.getCartTotal()}</div>
    </div>
  );
}
}

export default App;
