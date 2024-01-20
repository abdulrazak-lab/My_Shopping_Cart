import React from 'react';

class CartItem extends React.Component {
    
     
  render() {
    console.log("this.props", this.props)
    const {price, title, qty} = this.props.product;
    const {product, 
      onDecreaseQuantity, 
      onIncreaseQuantity, 
      onDeleteProdcuts
    } = this.props
    return (
      <div  className="cart-item">
        <div className="left-block">
            <img style={styles.image} src="" alt="" />
        </div>
        <div className="right-block">
                <div style={{fontSize: 25}}>{title}</div>
            <div style={{color: "#777"}}>₵: {price}</div>
            <div style={{color: "#777"}}>Qty: {qty}</div>
            <div className="cart-item-actions">
        
                <img 
                 alt='increase'
                 className='action-icons' 
                 src="https://cdn-icons-png.flaticon.com/128/992/992651.png"
                 onClick={() => onIncreaseQuantity(product)} 
                 />

                <img 
                alt='decrease' 
                className='action-icons' 
                src="https://cdn-icons-png.flaticon.com/128/1828/1828906.png"
                onClick={() => onDecreaseQuantity(product)}  
                />

                <img 
                alt='delete' 
                className='action-icons' 
                src="https://cdn-icons-png.flaticon.com/128/1214/1214428.png" 
                onClick={() => onDeleteProdcuts(product.id)}
                />

            </div>
        </div>
      </div>
    );
  }
}

const styles = {
    image: {
    height: 110,
    width: 110,
    borderRadiius: 4,
    background: "#ccc"
    }
}

export default CartItem
