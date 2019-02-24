import React, { Component } from 'react';



class CartItem extends Component {
    handleClickAdd = () =>{
        this.props.addToOrder(this.props.index)
    };
    handleClickReduce = () =>{
        this.props.reduceOrder(this.props.index)
    };
    render() {
        let {name,price,quantity} = this.props.inventory;
        return (
            <div className={'CartItem'}>
                {`${name} - $ ${price} x ${(this.props.order)?this.props.order:0}`}
                <br/>
                <button onClick={this.handleClickAdd} disabled={(quantity<=this.props.order)}>+1</button>
                <button onClick={this.handleClickReduce} disabled={(this.props.order<=0)}>-1</button>
                <br/>
                In stock:{(this.props.order)?quantity - this.props.order: quantity}
<hr/>
            </div>
        );
    }
}

export default CartItem;