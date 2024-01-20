import React from 'react'
import CartItem from './CartItem'

class Cart extends React.Component {
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
        console.log("increase", product)
        const {products} = this.state;
        const index = products.indexOf(product);
        products[index].qty += 1;
        this.setState({
        products
        });
    }

    handleDecreaseQuantity = (product) => {

    }


  render() {
    const { products } = this.state;
    return (
        <div className='cart'>
            {products.map((product) => {
                return (
                <CartItem 
                product={product} 
                key={product.id}
                onIncreaseQuantity={this.handleIncreaseQuantity}
                onDecreaseQuantity={this.handleDecreaseQuantity} 
                />
                )
            })}
        </div>
    )
  }
}

export default Cart
