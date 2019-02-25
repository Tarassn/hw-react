import React, { Component } from 'react';
import CartItem from "./CartItem";
import PropTypes from "prop-types";



class Cart extends Component {
    render() {
        let total = Object.keys(this.props.order).reduce((previousValue, key) =>{
            const item = this.props.inventory[key];
            const count = this.props.order[key];
            return previousValue + count * item.price;
        },0);
        return (
            <div className={'Cart'}>
                <div className={'row'}>
                    {Object.keys(this.props.inventory).map((key) => (
                        <CartItem
                            inventory={this.props.inventory[key]}
                            key={key}
                            index={key}
                            order={this.props.order[key]}
                            addToOrder={this.props.addToOrder}
                            deleteFromOrder={this.props.deleteFromOrder}
                        />
                    ))
                    }
                </div>
                <span>Total:${total}</span>
                <button
                    className={'btn btn-success'}
                    onClick={this.props.checkoutOrder}
                    disabled={(Object.keys(this.props.order).length < 1)}
                >Checkout</button>
            </div>
        );
    }
}

Cart.propTypes = {
    details:PropTypes.shape({
        name:PropTypes.string,
        price:PropTypes.number,
        quantity:PropTypes.number,
        img:PropTypes.string,
    }),
    order:PropTypes.object,
    addToOrder:PropTypes.func,
    deleteFromOrder: PropTypes.func,
    checkoutOrder: PropTypes.func,

};

export default Cart;