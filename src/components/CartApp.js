import React, { Component } from 'react';
import {inventory} from "../data-object";
import Inventory from "./Inventory";
import Cart from "./Cart";

class CartApp extends Component {
    state = {
        inventory:{},
        order:{},
    };

    componentDidMount(){
        this.loadInventory(this.sortInventory());
    }

    componentDidUpdate(){
        console.log();
    }

    loadInventory =(newValue) =>{
        this.setState({inventory:newValue})
    };

    sortInventory = () => {
        const unordered = inventory;
        let nameArr=[];
        let ordered = {};
        Object.keys(unordered).forEach(function(key) {
            nameArr.push([unordered[key].name]);
        });
        nameArr.sort();
        nameArr.map((key,index,array)=>{
            array[index] = [key[0], `item${index + 1}`]
        });
        nameArr.forEach((item)=>{
            for (let key in unordered){
                if(unordered.hasOwnProperty(key) && unordered[key].name === item[0]){
                    ordered[item[1]]=unordered[key]
                }
            }
            return ordered;
        });
        console.log(nameArr)
        return ordered
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