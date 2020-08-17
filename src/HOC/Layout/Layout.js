import React, {Component} from 'react';

import Auxi from '../Auxi/auxi';
import classes from './Layout.module.css';
import Toolbar from '../../components/Nevigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Nevigation/SideDrawer/SideDrawer';

class Layout extends Component
{
    state = {
        showSideDrawer: false
    }
    sideDrawerClosedHandler = () =>
    {
        this.setState({showSideDrawer: false});
    }

    drawerToggleHandler = () =>
    {
        this.setState((prevState) => {
            return {showSideDrawer: !this.state.showSideDrawer};
        })
    }


    render () {
        return (
            <Auxi>
                <Toolbar drawerToggleClicked={this.drawerToggleHandler}/>
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Auxi>
        );
    }
}
    
    


export default Layout;