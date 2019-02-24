import React, { Component } from 'react';
import CartItem from "./CartItem";



class Cart extends Component {
    render() {

        return (
            <div className={'Cart'}>
                {Object.keys(this.props.inventory).map((key) => (
                    <CartItem
                        inventory={this.props.inventory[key]}
                        key={key}
                        index={key}
                        order={this.props.order[key]}
                        addToOrder={this.props.addToOrder}
                        reduceOrder={this.props.reduceOrder}
                    />
                ))
                }
            </div>
        );
    }
}

export default Cart;