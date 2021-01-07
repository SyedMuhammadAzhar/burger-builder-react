import React from 'react';
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'


const controls=[
    {Label:'Salad', type:'salad'},
    {Label:'Bacon', type:'bacon'},
    {Label:'Cheese', type:'cheese'},
    {Label:'Meat', type:'meat'},

];


const buildControls=(props)=>(
    <div className={classes.BuildControls}>

       {controls.map(cntrl=>{
           return(<BuildControl
             key={cntrl.Label} 
             label={cntrl.Label}
             added={()=>props.ingredientAdded(cntrl.type)}
             removed={()=>props.ingredientRemoved(cntrl.type)}
             disabled={props.disabled[cntrl.type]}
             {...console.log(props.disabled)}
             
           
            
            />)
       })}


    </div>
);

export default buildControls;