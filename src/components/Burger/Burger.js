import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import classes from './Burger.module.css';

const burger = (props) =>{

    // const transformedIngredient = Object.keys( props.ingredients ).map(
    //     igKey => {
    //         return [...Array( props.ingredients[igKey])].map((_, i) => {
    //             return <BurgerIngredient key={igKey +i} type={igKey} />;
    //         });
    //     });
    let transformedIngredient = [];

    for(let key in props.ingredients)
    {
        for(let i=0;i<props.ingredients[key];i++)
        {
            transformedIngredient.push(<BurgerIngredient key={key + i} type={key} />);
        }
    }
    transformedIngredient.reduce((arr, el) => {
        return arr.concat(el)
    },[]);

    if(transformedIngredient.length === 0)
    {
        transformedIngredient = <p>Please start adding ingredient</p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
                {transformedIngredient}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    );
}


export default burger;