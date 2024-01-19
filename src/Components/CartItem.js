import React from 'react';

class CartItem extends React.Component {
  render() {
    return (
      <div  className="cart-item">
        <div className="left-block">
            <img style={styles.image} src="" alt="" />
        </div>
        <div className="right-block">
            <div style={{fontSize: 25}}>Bags</div>
            <div style={{color: "#777"}}>Price: ₵ 198</div>
            <div style={{color: "#777"}}>Qty: 1</div>
            <div style={{color: "#777"}}>Description: Qualitity bags</div>

            <div className="cart-item-actions">
        
                <img alt='increase' className='action-icons' src="https://cdn-icons-png.flaticon.com/128/992/992651.png" />
                <img alt='decrease' className='action-icons' src="https://cdn-icons-png.flaticon.com/128/1828/1828906.png" />
                <img alt='delete' className='action-icons' src="https://cdn-icons-png.flaticon.com/128/1214/1214428.png" />
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
