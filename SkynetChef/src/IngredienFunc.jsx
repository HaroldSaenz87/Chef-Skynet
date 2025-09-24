function IngredienFunc(props){

    const ingredientsList = props.ingredients.map(ingredients => (
        <li key={ingredients}>{ingredients}</li>
    ))

    return(
        <section>

            <h2>Ingredients on hand:</h2>

            <ul>
                {ingredientsList}
            </ul>

            {props.ingredients.length > 3 ?<div className="get-recipe-container">

                <div className="Ready">
                    <h3>Ready for a recipe?</h3>
                    <p>Generate a recipe from your list of ingredients.</p>
                </div>

                <button onClick={props.toggleRecipeShow} className="btn">Get a recipe</button>
                
            </div>: null}

            </section>
    )

}
export default IngredienFunc