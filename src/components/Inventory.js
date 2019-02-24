import React, { Component } from 'react';



class Inventory extends Component {
    handleClick = () =>{
        this.props.addToOrder(this.props.index)
    };
    render() {
        let {name,price,quantity,img} = this.props.details;
        return (
            <div className={'Inventory'}>
                {name} - ${price}
                <img src={img} className={'inventory-img'} alt={name}/>
                <button onClick={this.handleClick} disabled={(quantity<=this.props.order)}> Buy</button>
                ( Ordered: {this.props.order||'0'} {' '}
                Left:{(this.props.order)?quantity - this.props.order: quantity})
            </div>
        );
    }
}

export default Inventory;