import React from 'react'
import Auxiliary from '../../../hoc/Auxiliary '

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
            
        </Auxiliary>


    );

}

export default orderSummary;