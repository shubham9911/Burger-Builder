import React, {Component} from 'react';

import Auxi from '../../../HOC/Auxi/auxi';
import Button from '../../UI/Button/Button';


class OrderSummary extends Component {
   

    render () {
        const ingredientSummary = Object.keys(this.props.ingredients).map(igKey =>{
            return (
                <li key={igKey}>
                    <span style={{textTransforn: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]};
                </li>
            )
        })


        return (
            <Auxi>
                <h3>Your Order</h3>
                <p>A delicious burger with following ingredients:</p>
                <ul>
                    {ingredientSummary}
                </ul>
                <p><strong>Total Price: ${this.props.price.toFixed(2)}</strong></p>
                <p>Continue to Checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCanceled}>CANCEL</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinue}>CONTINUE</Button>
            </Auxi>
        )
    }
};


export default OrderSummary;