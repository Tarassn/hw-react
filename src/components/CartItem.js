import React, { Component } from 'react';
import PropTypes from "prop-types";



class CartItem extends Component {
    handleClickAdd = () =>{
        this.props.addToOrder(this.props.index)
    };
    handleClickDelete = () =>{
        this.props.deleteFromOrder(this.props.index)
    };
    render() {
        let {name,price,quantity} = this.props.inventory;
        return (
            <div className={'CartItem col-md-4'}>
                {`${name} - $ ${price} x ${(this.props.order)?this.props.order:0}`}
                <br/>
                <button className={'btn btn-info'} onClick={this.handleClickAdd} disabled={(quantity<=this.props.order)}>+1</button>
                <button className={'btn btn-info'} onClick={this.handleClickDelete} disabled={(this.props.order<=0)}>-1</button>
                <br/>
                In stock:{(this.props.order)?quantity - this.props.order: quantity}
<hr/>
            </div>
        );
    }
}
CartItem.propTypes = {
    details:PropTypes.shape({
        name:PropTypes.string,
        price:PropTypes.number,
        quantity:PropTypes.number,
    }),
    order:PropTypes.number,
    addToOrder:PropTypes.func,
    deleteFromOrder: PropTypes.func,

};

export default CartItem;