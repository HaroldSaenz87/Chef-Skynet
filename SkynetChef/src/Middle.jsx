import { useState } from "react"

function Middle(){

    const [ingredients, setIngredients] = useState([])

    const ingredientsList = ingredients.map(ingredients => (
        <li key={ingredients}>{ingredients}</li>
    ))

    function addIngredient(formData){
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
        
    }

    return(
        <main>
            <form action={addIngredient} className="ingred-form">
                <input type="text"
                placeholder="e.g. oregano" aria-label="Add ingredient" name="ingredient" />
                <button>+ Add Ingredient</button>
            </form>

            <section>

                <h2>Ingredients on hand:</h2>

                <ul>
                    {ingredientsList}
                </ul>

                <div className="get-recipe-container">

                    <div>
                        <h3>Ready for a recipe?</h3>
                        <p>Generate a recipe from your list of ingredients.</p>
                    </div>

                    <button>Get a recipe</button>
                    
                </div>

            </section>

        </main>
    )
}
export default Middle