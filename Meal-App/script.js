const search = document.getElementById("search");
const random = document.getElementById("random");
const mealElement = document.getElementById("meals");
const singleMeal = document.getElementById("single-meal");
const resultHeading = document.getElementById("result-heading");
const submit = document.getElementById("submit");

const SEARCH_API = "https://www.themealdb.com/api/json/v1/1/search.php?s";
const RANDOM_SEARCH = "https://www.themealdb.com/api/json/v1/1/random.php";


function handleClickedEvent(source) {
  console.log("clicked---")
console.log( source.getAttribute("data-mealID"))
}

function randomSearch(e) {
  e.preventDefault();
  fetch(RANDOM_SEARCH).then(res => res.json()).then(({meals}) => {
    resultHeading.innerHTML = `<h2>Random results: <h2>`;
    if(!meals) {
      resultHeading.innerHTML = `No result found`;
    }
    
    mealElement.innerHTML = meals.map(meal => `
      <div class="meal">
        <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
        <div class="meal-info" data-mealID="${meal.idMeal}">
          <h3>${meal.strMeal}</h3>
        </div>
      </div>

    `)
    .join('');
  });
}
 
function searchMeal(e) {
  e.preventDefault();
  const searchTerm = (search.value).trim();
  if(!searchTerm) {
    alert('Please enter a seach value');
  }

  fetch(`${SEARCH_API}=${searchTerm}`).then(res => res.json()).then(({meals}) => {
    resultHeading.innerHTML = `<h2>Search results for  '${searchTerm}' : <h2>`;
    if(!meals) {
      resultHeading.innerHTML = `No result found`;
    }
    
    mealElement.innerHTML = meals.map(meal => `
      <div class="meal">
        <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
        <div class="meal-info" data-mealID="${meal.idMeal}">
          <h3>${meal.strMeal}</h3>
        </div>
      </div>

    `)
    .join('');
    search.value = "";
  })

}
if(submit) {
  submit.addEventListener('submit', searchMeal);
}

if(random) {
  random.addEventListener('click', randomSearch);
}
if(mealElement) {
  mealElement.addEventListener('click', (e) => {
    const mealInfo = e.path.find( item => {
      if (item.classList) {
        return item.classList.contains('meal-info');
      }
    })
    console.log('====',mealInfo)
  });
}