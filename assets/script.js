const searchBar = document.querySelector("#searchBar");
const searchBtn = document.querySelector("#searchBtn");
const searchHistory = document.querySelector(".searchHistory");

const API_KEY = "9d35e655e95e27d60138ab4d4be043b1";
const City = "Denver"
const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=${API_KEY}`;

function tempfun() {
    // will be removed
    fetch(API_URL)
        .then((data) => data.json())
        .then((data) => console.log(data));
        
    console.log("temp is")
}

function searchBtnClick() {
    // What happens when the button is clicked
    searchBtn.addEventListener("click",function (e) {});
}

function saveSearchHistory(search) {
    // saves the users input to localStorage
    // TODO: Use Template Literals to display the search history button 
}

function displayData(day) {
    // displays the weather for the day
}
tempfun()