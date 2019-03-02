import React, { Component } from 'react';
import CartApp from "./CartApp";
import PropTypes from 'prop-types';

class Inventory extends Component {
    handleClick = () =>{
        this.props.addToOrder(this.props.index)
    };
    render() {
        let {name,price,quantity,img} = this.props.details;
        return (
            <div className={'Inventory col-md-4'}>
                {name} - ${price}
                <img src={img} className={'inventory-img'} alt={name}/>
                <br/>
                <button className={'btn btn-info'} onClick={this.handleClick} disabled={(quantity<=this.props.order||quantity===0)}> Buy</button>
                <br/>
                ( Ordered: {this.props.order||'0'} {' '}
                Left:{(this.props.order)?quantity - this.props.order: quantity})
            </div>
        );
    }
}
Inventory.propTypes = {
    details:PropTypes.shape({
        name:PropTypes.string,
        price:PropTypes.number,
        quantity:PropTypes.number,
        img:PropTypes.string,
    }),
    order:PropTypes.number,
    addToOrder:PropTypes.func,
};

export default Inventory;