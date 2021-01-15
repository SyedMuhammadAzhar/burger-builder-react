import React from 'react'

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

        <div>
            <h3>Your Order</h3>
            <p>A delecious burger with the following ingredients:</p>
            <ul>

                {ingredientSummary}
                
            </ul>
            
        </div>


    );

}

export default orderSummary;