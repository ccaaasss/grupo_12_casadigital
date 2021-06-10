window.onload = function(){
    let search = document.querySelector(".fas fa-search");
    let login = document.querySelector(".login");
    let input = document.querySelector("#seach");

    search.addEventListener("click", function(e){
        login.style.display= 'none';
    })
}