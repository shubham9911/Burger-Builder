import React from 'react';

import Logo from '../../Logo/Logo';
import NevigationItems from '../NevigationItems/NevigationItems';
import classes from './SideDrawer.module.css';
import Backdrop from '../../UI/BackDrop/backDrop';
import Auxi from '../../../HOC/Auxi/auxi';
//import backdrop from '../../UI/BackDrop/backDrop';



const sideDrawer = (props) =>{
    
    let attachClasses = [classes.SideDrawer, classes.Close];
    if(props.open)
    {
        attachClasses = [classes.SideDrawer, classes.open];
    }
    
    
    return (
        <Auxi>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachClasses.join(' ')}>
            <div className={classes.Logo}>
                <Logo />
            </div>
            <nav>
                <NevigationItems />
            </nav>
            </div>
        </Auxi>
    );
};

export default sideDrawer;