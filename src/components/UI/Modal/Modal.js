import React from 'react';

import classes from './Modal.module.css';
import Auxi from '../../../HOC/Auxi/auxi';
import Backdrop from '../BackDrop/backDrop';

const modal = (props) => (
    <Auxi>
        <Backdrop show={props.show} clicked={props.modalClosed} />
            <div className={classes.Modal}
                style={{
                    transform : props.show? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1': '0'
                }}>
            {props.children}
            </div>
    </Auxi>
    
);

export default modal;