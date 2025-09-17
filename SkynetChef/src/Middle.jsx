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
            <ul>
                {ingredientsList}
            </ul>

        </main>
    )
}
export default Middle