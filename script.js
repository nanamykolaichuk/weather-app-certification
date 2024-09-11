function handleSearchSubmit(event){
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");

    let h1City = document.querySelector("#city");
    h1City.innerHTML = searchInput.value;
    searchInput.value = "";

}


let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit",handleSearchSubmit);