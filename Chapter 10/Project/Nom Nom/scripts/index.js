// let request = new XMLHttpRequest();
// request.open('GET', 'https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata', true);
// request.setRequestHeader('Accept', 'application/json');
// request.send();
// request.onreadystatechange = function() {
//     if(this.readyState === 4 && this.status === 200) {
//         console.log(this.responseText);
//     }
// }

let request = new XMLHttpRequest();
request.open('GET', 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Pasta', true);
request.send();
request.onreadystatechange = function() {
    if(this.readyState === 4 && this.status === 200) {
        createRecipeCards(JSON.parse(this.responseText).meals);
    }
}

const createRecipeCards = list => {
    let recipesContainer = document.querySelector(".recipes");
    for(let recipe of list) {
        let recipeCard = document.createElement('div');
        recipeCard.setAttribute("id", recipe.idMeal);
        recipeCard.setAttribute("class", "recipe-card");
        let recipeImg = document.createElement("img");
        recipeImg.setAttribute("src", recipe.strMealThumb);
        recipeImg.setAttribute("class", "recipe-img");
        recipeImg.setAttribute("alt", recipe.strMeal);
        recipeCard.appendChild(recipeImg);
        let recipeTitle = document.createElement("p");
        recipeTitle.setAttribute("class", "recipe-title");
        recipeTitle.innerHTML = recipe.strMeal;
        recipeCard.appendChild(recipeTitle);
        recipesContainer.appendChild(recipeCard);

        recipeCard.onclick = () => viewRecipe(recipe.idMeal);
    }
}


const viewRecipe = id => window.location.href = `/recipe-detail.html?id=${id}`;
