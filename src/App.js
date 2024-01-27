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
                img: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=600",
                id: 1
            },
            {
                price: 1982,
                title: "Laptop",
                qty: 13,
                img: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fGxhcHRvcHxlbnwwfHwwfHx8MA%3D%3D",
                id: 2
            },
            {
                price: 109,
                title: "Watch",
                qty: 1,
                img: "https://unsplash.com/photos/round-silver-colored-chronograph-watch-with-brown-leather-strap-12V36G17IbQ",
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
