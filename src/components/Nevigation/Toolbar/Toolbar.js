import React from 'react';

import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NevigationItems from '../NevigationItems/NevigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = (props) => (
    
    <header className={classes.Toolbar}>
        <DrawerToggle clicked={props.drawerToggleClicked}/>
        <div className={classes.Logo}>
            <Logo />
        </div>
        <nav className={classes.DesktopOnly}>
            <NevigationItems />
        </nav>
    </header>
);


export default toolbar;
