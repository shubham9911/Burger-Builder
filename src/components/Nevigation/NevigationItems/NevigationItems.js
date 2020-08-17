import React from 'react';

import classes from './NevigationItems.module.css';
import NevigationItem from './NevigationItem/NevigationItem';

const nevigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NevigationItem link="/" active>Burger Builder</NevigationItem>
        <NevigationItem link="/">Checkout</NevigationItem>
    </ul>
);

export default nevigationItems;