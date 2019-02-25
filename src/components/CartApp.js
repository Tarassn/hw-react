import React, { Component } from 'react';
import {inventory} from "../data-object";
import Inventory from "./Inventory";
import Cart from "./Cart";
import PropTypes from 'prop-types';

class CartApp extends Component {
    state = {
        inventory:{},
        order:{},
    };
    componentDidMount(){
        this.loadInvertory();
    }
    loadInvertory =() =>{
        this.setState({inventory:inventory})
    };

    addToOrder = (id) => {
        const order = {...this.state.order};
        order[id] = order[id] +1 || 1;
        this.setState({ order });
    };
    deleteFromOrder = (id) => {
        const order = {...this.state.order};
        order[id] = order[id] -1 || 0;
        this.setState({ order });
    };
    checkoutOrder = () => {
        const inventory = {...this.state.inventory};
        console.log(inventory);
        Object.keys(inventory).map((key) => {
            console.log(this.state.order);
            return inventory[key]['quantity'] -= (this.state.order[key])?this.state.order[key] :0;
        });
        console.log(inventory);
        const order = {};
        this.setState({ order });

    };
    render() {
        return (
            <div className={'cart-app'}>
                <Cart
                    order={this.state.order}
                    inventory={this.state.inventory}
                    addToOrder={this.addToOrder}
                    deleteFromOrder={this.deleteFromOrder}
                    checkoutOrder={this.checkoutOrder}
                />

                <div className={'inventory-container row'}>
                {Object.keys(this.state.inventory).map((key) => (
                    <Inventory
                        details={this.state.inventory[key]}
                        key={key}
                        index={key}
                        addToOrder={this.addToOrder}
                        order={this.state.order[key]}
                    />
                ))
                }
                </div>
            </div>
        );
    }
}


export default CartApp;