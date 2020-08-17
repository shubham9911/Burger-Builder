import React, { Component } from 'react';

import Auxi from '../../HOC/Auxi/auxi';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
// import { Simulate } from 'react-dom/test-utils';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/orderSummary';
import classes from './BurgerBuilder.module.css';


const INGREDIENT_PRICE= {
    salad: 0.5,
    bacon: 0.7,
    cheese: 0.4,
    meat: 1.3
}

class BurgerBuilder extends Component{
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },

        totalPrice: 4,

        purchasable: false,
        purchasing: false
    }

    updatePurchaseState (ingredients) {
        

        const sum = Object.keys(ingredients).map(igKey => {
            return ingredients[igKey]; 
        }).reduce((sum, el) => {
            return sum +el;
        }, 0);
        this.setState({purchasable: sum> 0});
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount +1;
        const updatedIngredient = {
            ...this.state.ingredients
        };

        updatedIngredient[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredient})
        this.updatePurchaseState(updatedIngredient);
    }

    purchaseHandler = () => {
        this.setState({purchasing: true});
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing: false});
    }

    purchaseCintinueHandler = () => {
        alert('You continue!');

    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if(oldCount<=0)
        {
            return;
        }
        const updatedCount = oldCount -1;
        const updatedIngredient = {
            ...this.state.ingredients
        };

        updatedIngredient[type] = updatedCount;
        const priceDeduction = INGREDIENT_PRICE[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredient})
        this.updatePurchaseState(updatedIngredient);
    }

    render () {

        const disabledInfo = {
            ...this.state.ingredients
        };
        for(let key in disabledInfo)
        {
            disabledInfo[key] = disabledInfo[key]<=0
        }

        return (
            <Auxi className={classes.BurgerBuilder}>
                <Modal show={this.state.purchasing}
                        modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary 
                        ingredients={this.state.ingredients}
                        price={this.state.totalPrice}
                        purchaseCanceled={this.purchaseCancelHandler}
                        purchaseContinue={this.purchaseCintinueHandler}/>
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientRemoved={this.removeIngredientHandler}
                    ingredientAdded={this.addIngredientHandler}
                    disable={disabledInfo}
                    price={this.state.totalPrice}
                    purchasable={this.state.purchasable}
                    orderd={this.purchaseHandler}
                />
                
            </Auxi>
        );
    }
}


export default BurgerBuilder;