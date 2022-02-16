import React from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import { useState } from "react";
import useScript from "../hooks/useScript";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import "../styles/Produce.css";

function RecipeForm() {
    useScript("https://cse.google.com/cse.js?cx=a008388c1332f50d4");
    const [ingredientFields, setIngredientFields] = useState([
        { ingredient: '' },
    ])

  const handleChangeInput = (index, event) => {
    const values = [...ingredientFields];
    values[index][event.target.name] = event.target.value;
    setIngredientFields(values);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Ingredient Fields", ingredientFields);

    let query = "";
    const allIngredients = ingredientFields.map(
      (ingredientField) => ingredientField.ingredient
    );
    console.log(allIngredients);
    // add all ingredients to query, replace " " with "+"

    for (let i = 0; i < allIngredients.length; i++) {
      let toAdd = allIngredients[i];
      if (toAdd !== "") {
        query.replace(" ", "+");
        query += toAdd + "+";
      }
    }

    query = query.slice(0, query.length - 1); // remove "+" from end of query
    window.open('recipes/?q="recipe"+' + query, "_self");
    //when do twice, adds another recipes to top to it.
    //fix to stay on recipes url? not just go straight to home?
  };

  const handleAddFields = () => {
    setIngredientFields([...ingredientFields, { ingredient: "" }]);
  };

  const handleRemoveFields = (index) => {
    const values = [...ingredientFields];
    values.splice(index, 1);
    setIngredientFields(values);
  };

  return (
    <>
      <Container>
        <h1>Search For Recipes</h1>
        <form>
          {ingredientFields.map((ingredientField, index) => (
            <div key={index}>
              <TextField
                name="ingredient"
                label="Type Ingredient Here"
                value={ingredientField.ingredient}
                onChange={(event) => handleChangeInput(index, event)}
              />
              <IconButton onClick={() => handleRemoveFields(index)}>
                <RemoveIcon />
              </IconButton>
              <IconButton onClick={() => handleAddFields()}>
                <AddIcon />
              </IconButton>
            </div>
          ))}
          <br></br>
          <Button
            variant="contained"
            color="primary"
            type="submit"
            onClick={handleSubmit}
          >
            Find Recipes
          </Button>
        </form>
      </Container>
      <div className="gcse-searchresults-only"></div>
    </>
  );
}

export default RecipeForm;
