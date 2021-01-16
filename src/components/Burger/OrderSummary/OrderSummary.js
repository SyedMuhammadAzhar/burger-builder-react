import React from 'react'
import Auxiliary from '../../../hoc/Auxiliary '
import Button from '../../UI/Button/Button'

const orderSummary =(props)=>{

    const ingredientSummary=Object.keys(props.ingredients)
                            .map(igkey=>{
                                return(
                                    <li key={igkey}>
                                        {igkey}:{props.ingredients[igkey]}

                                    </li>
                                );
                            })
    ;



    return(

        <Auxiliary>
            <h3>Your Order</h3>
            <p>A delecious burger with the following ingredients:</p>
            <ul>

                {ingredientSummary}
                
            </ul>

            <Button btnType={'Danger'} clicked={props.purchaseCancel}>Cancel</Button>
            <Button btnType={'Success'} clicked={props.purchaseContinue}>Continue</Button>
            
        </Auxiliary>


    );

}

export default orderSummary;