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

    addToOrder = (key) => {
        const order = {...this.state.order};
        order[key] = order[key] +1 || 1;
        this.setState({ order });
    };
    reduceOrder = (key) => {
        const order = {...this.state.order};
        order[key] = order[key] -1 || 0;
        this.setState({ order });
    };
    render() {
        return (
            <div className={'cart-app'}>
                <Cart
                    order={this.state.order}
                    inventory={this.state.inventory}
                    addToOrder={this.addToOrder}
                    reduceOrder={this.reduceOrder}
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