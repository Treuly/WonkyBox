import React from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import { useState } from 'react';
import useScript from '../hooks/useScript';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';

function RecipeForm() {
    useScript("https://cse.google.com/cse.js?cx=9cd2bf4247a5bd283");
    const [ingredientFields, setIngredientFields] = useState([
        { ingredient: '' },
    ])

    const handleChangeInput = (index, event) => {
        const values = [...ingredientFields]
        values[index][event.target.name] = event.target.value
        setIngredientFields(values);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Ingredient Fields", ingredientFields);
    }


    const handleAddFields = () => {
        setIngredientFields([...ingredientFields,
        { ingredient: '' }])
    }

    const handleRemoveFields = (index) => {
        const values = [...ingredientFields];
        values.splice(index, 1);
        setIngredientFields(values);

    }


    return (
        <Container>
            <h1>Search For Recipes</h1>
            <form>
                {ingredientFields.map((ingredientField, index) => (
                    <div key={index}>
                        <TextField
                            name="ingredient"
                            label="Type Ingredient Here"
                            value={ingredientField.ingredient}
                            onChange={event => handleChangeInput(index, event)}
                        />
                        <IconButton
                            onClick={() => handleRemoveFields(index)}>
                            <RemoveIcon />
                        </IconButton>
                        <IconButton
                            onClick={() => handleAddFields()}
                        >
                            <AddIcon />
                        </IconButton>
                    </div>
                ))}
                <br></br>
                <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    onClick={handleSubmit}>Find Recipes</Button>
            </form>
        </Container>
    )
}

export default RecipeForm