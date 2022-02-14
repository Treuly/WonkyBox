import React from 'react';
import useScript from '../hooks/useScript';

const GoogleRecipe = () => {
  useScript("https://cse.google.com/cse.js?cx=9cd2bf4247a5bd283");
    // remove 'remove' button on first ingredient input field
    // let thingy = document.getElementById('0').childNodes[3].style.display = "none"
    // num is used to give each ingredient field a unique id
    let num = 1;

    const addField = () => {
        const item = document.getElementsByClassName('ingr-row')[0]; // get first ingredient field
        const clone = item.cloneNode(true); // clone it
        clone.id = num; // assign num to clone id
        clone.childNodes[3].style.display = "initial" // make sure remove button on cloned element is displayed
        clone.value = null; // reset value of cloned element
        
        num += 1;
        document.getElementById('ingr-form').appendChild(clone)
      }

    const removeField = (id) => {
        if (id !== 0) {
          // document.getElementById('ingr-form').removeChild(document.getElementById(id))
          document.getElementById('ingr-form').remove(document.getElementById(id));
          num--
        }
      }

      const findRecipes = () => {
        let query = ""
        let allIngredients = document.getElementsByClassName("search-fields");
        console.log(allIngredients);
        // add all ingredients to query, replace " " with "+"
       
        for (let i = 0; i < allIngredients.length; i++) {
          let toAdd = allIngredients[i].value;
          if (toAdd !== "") {
            query.replace(" ", "+")
            query += toAdd + "+"
          }
        }
    
        query = query.slice(0, query.length - 1) // remove "+" from end of query
        window.open('recipes/?q="recipe"+' + query, '_self')
      }

    const handleSubmit = (e) =>{
        e.preventDefault();
        //change to prevent default if doeesn't work
    }

    return(
        <div>
            <h1 className="searchTitle">I am looking for a recipe that uses:</h1>
            <div id="ingr-form" onSubmit={handleSubmit}>
                <button onClick={addField}>Add ingredient</button>
                    <div className="ingr-row" id="0">
                        <input 
                            type="text" 
                            className="search-fields" 
                            placeholder="enter ingredient..."
                            />
                               <button onClick= {(e) => removeField(e.currentTarget.id)}>Remove</button>
                    </div>
            </div>
            <button onClick={findRecipes}>Search</button>
            <div className="gcse-searchresults-only"></div>

        </div>
    )
}



export default GoogleRecipe;