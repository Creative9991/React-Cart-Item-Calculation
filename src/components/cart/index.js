import React, {Component} from "react";
import "./index.css";

export default class Cart extends Component {

    constructor(props){
        super(props)
        this.state = {
            discountSelected : 0
        }
        //this.handleChange= this.handleChange.bind(this);
    }
 
    handleChange(e) {
        let {value} = e.target;
       
        this.setState({
          discountSelected: value,
        
        });
        console.log(this.state);
        
        }

    render() {
        //discountTen = 10;
        console.log(this.state);
        const { discountSelected} = this.state
        var totalPrice = 0;
            var subTotalVal = 0;
        if(typeof this.props.cart.items !== 'undefined' &&  this.props.cart.items.length > 0){
            this.props.cart.items.forEach((cartItem) => {
                console.log(cartItem);
                subTotalVal = subTotalVal + cartItem.price;
            })
        }


        if(subTotalVal >= discountSelected){
         totalPrice = subTotalVal - discountSelected;
        }else{
            totalPrice = subTotalVal
            //document.getElementsByClassName('')
        }

        return (
            <div className="card outlined my-16 mr-25 flex-30">
                <section className="layout-row align-items-center justify-content-center px-16">
                    <h4>Your Cart</h4>
                </section>
                <div className="divider"/>
                <table>
                    <thead>
                    <tr>
                        <th></th>
                        <th>Item</th>
                        <th className="numeric">Quantity</th>
                        <th className="numeric">Price</th>
                    </tr>
                    </thead>
                    <tbody>
                    { 
                        this.props.cart.items.map((cartItem, idx) => {
                            this.props.cart.subTotal = +this.props.cart.subTotal
                           
                            console.log(this.props.cart.items[idx].price);
                            
                            // this.props.subTotal,
                            // this.props.totalPrice,
                            // this.props.discount
                            return (
                                <tr data-testid={'cart-item-' + idx}
                                    key={idx + 1}
                                    className="slide-up-fade-in">
                                    <td>{idx + 1}.</td>
                                    <td className="name" data-testid="cart-item-name">{cartItem.item}</td>
                                    <td className="numeric quantity" data-testid="cart-item-quantity">
                                        {cartItem.quantity}
                                    </td>
                                    <td className="numeric quantity" data-testid="cart-item-price">
                                        {cartItem.price}
                                    </td>
                                </tr>
                            )
                        })
                    }

                    </tbody>
                </table>
                <div className="layout-row justify-content-between align-items-center px-8 mx-12">
                    <h5>Select Coupon</h5>
                    <select data-testid="cart-coupon"
                            className="coupon-select"
                            onChange={(e) => {
                                this.handleChange(e)
                            }}>
                        <option value="0">None</option>
                        <option value="10" >OFF10</option>
                        <option value="20">OFF20</option>
                    </select>
                </div>
                <ul className="bordered inset ma-0 px-8 mt-30">
                    <li className="layout-row justify-content-between py-12 caption font-weight-light">
                        <span>Subtotal</span>
                        <span data-testid="cart-subtotal">${subTotalVal}</span>
                    </li>
                    <li className="layout-row justify-content-between py-12 caption font-weight-light">
                        <span>Discount (-)</span>
                        <span className="discount" data-testid="cart-discount">${discountSelected}</span>
                    </li>
                    <li className="layout-row justify-content-between py-12 font-weight-bold">
                        <span>Total</span>
                        <span data-testid="cart-total">${totalPrice}</span>
                    </li>
                </ul>
            </div>

        );
    }
}
