import React, {Component} from "react";
import "./index.css";

export default class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state= {
            cartVisibility : {}
        }
    }
    addClick = (index) => {
       
        var cartButtonIds = this.state.cartVisibility;
      cartButtonIds[index] = 'hidden'
        this.setState({ cartVisibility : cartButtonIds})
        this.props.addMethod(index);
    }
    removeClick = (index, heading) => {
        var cartButtonIds = this.state.cartVisibility;
        cartButtonIds[index] = 'visible'
          this.setState({ cartVisibility : cartButtonIds})
        this.props.removeMethod(index , heading);
    }

    render() {
        const {cartVisibility} = this.state
        return (
            <div className="layout-row wrap justify-content-center flex-70 app-product-list">
                {this.props.products.map((product, i) => {
                    return (
                        <section className="w-30"
                                 data-testid={'product-item-' + i}
                                 key={product.id}>
                            <div className="card ma-16">
                                <img alt="Your Cart" src={product.image}
                                     className="d-inline-block align-top product-image"/>
                                <div className="card-text pa-4">
                                    <h5 className="ma-0 text-center">{product.name}</h5>
                                    <p className="ma-0 mt-8 text-center">${product.price}</p>
                                </div>
                                <div className="card-actions justify-content-center pa-4">
                                    {
                                         cartVisibility[i] === 'hidden' ? (
                                            <button className="x-small outlined" style = {{visibility : 'hidden'}} data-testid="btn-item-add" onClick={(e) => this.addClick(i)}>
                                            Add To Cart
                                         </button>
                                         
                                        ) : (
                                            <button className="x-small outlined" style = {{visibility : 'visible'}} data-testid="btn-item-add" onClick={(e) => this.addClick(i)}>
                                            Add To Cart
                                        </button>
                                        )
                                    }
                                   
                                    <button className="x-small danger" data-testid="btn-item-remove" onClick={(e) => this.removeClick(i, product.heading)}>
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </section>
                    )
                })}

            </div>

        );
    }
}

