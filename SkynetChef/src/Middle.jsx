import { useState } from "react"
import IngredienFunc from "./IngredienFunc"

function Middle(){

    // state to store the list of ingredients(Start empty)
    const [ingredients, setIngredients] = useState([])

    // state to track whether the recipe should be shown (starts false)
    const [recipeShow, setRecipeShow] = useState(false)

    // Function to toggle recipeshow between true and false
    function toggleRecipeShow(){
        setRecipeShow(prevShow => !prevShow)
    }

    // add a new ingredient from form data
    function addIngredient(formData){
        // extract the ingredient string from the form input
        const newIngredient = formData.get("ingredient")

        // update state by appending the new ingredient to the existing list
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
        
    }

    return(
        <main>

            <form action={addIngredient} className="ingred-form">

                <input type="text"
                placeholder="e.g. oregano" aria-label="Add ingredient" name="ingredient" required />

                <button>+ Add Ingredient</button>

            </form>
            
            {/* if there are any ingredients render the ingredienfunc component*/}
            {ingredients.length > 0 && 
                <IngredienFunc 
                    ingredients ={ingredients} // pass array ingredient as prop
                    toggleRecipeShow={toggleRecipeShow} //pass toggle function as prop 
                />
            }

        </main>
    )
}
export default Middle