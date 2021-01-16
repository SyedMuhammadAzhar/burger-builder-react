import React from 'react';
import classes from './Modal.css'
import Auxiliary from '../../../hoc/Auxiliary '
import BackDrop from './BackDrop/BackDrop'


const modal =(props)=>{

    return(

        <Auxiliary>

        <BackDrop show={props.show} clicked={props.modalClosed}/>

        <div className={classes.Modal}
            style={
                {
                    transform:props.show ? 'translateY(0)' : 'transteY(-100vh)',
                    opacity:props.show ? '1':'0',
                    display: props.show? 'block' :'none'
                    // only opacity also work
                    
                }
            }>

            {props.children}
        </div>

        </Auxiliary>

    );


}

export default modal;