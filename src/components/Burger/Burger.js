import React from 'react';

import BurgerIngredients from './BurgerIngredients/BurgerIngredients'
import classes from './Burger.css'
const burger=(props)=>{



    // keys method return array of [salad,bacon,cheese,meat] on this we applay map method
    let TransformedIngredient = Object.keys(props.ingredients)
                                .map(igKey=>{
                                    // below will return array of every key for salad its array of 1 element and for cheese its array fo 2 elements
                                    return [...Array(props.ingredients[igKey])].map((_,i)=>{

                                        // igkey is salad bacon etc+i is index which keep on increasing
                                        return <BurgerIngredients key={igKey+i} type={igKey} />


                                    })
                                })
                        .reduce((arr,el)=>{

            return arr.concat(el);

        },[]);

        console.log(TransformedIngredient);


        if(TransformedIngredient.length===0){
            TransformedIngredient=<p>Please start adding ingredients</p>
        }
                            
                    

                


    return(

        <div className={classes.Burger}>

            <BurgerIngredients type="bread-top"/>
            {TransformedIngredient}
            <BurgerIngredients type="bread-bottom"/>
        </div>

    );
}

export default burger