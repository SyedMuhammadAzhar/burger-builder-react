import React from 'react';
import classes from './Modal.css'


const modal =(props)=>{

    return(

        <div className={classes.Modal}
            style={
                {
                    transform:props.show ? 'translateY(0)' : 'transteY(-100vh)',
                    opacity:props.show ? '1':'0',
                    // only opacity also work
                    
                }
            }>

            {props.children}
        </div>

    );


}

export default modal;