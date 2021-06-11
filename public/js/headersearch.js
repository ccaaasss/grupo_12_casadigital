window.onload = function(){
    const lupita = document.querySelector("#lupita");
    const nombre = document.querySelector("#nombre");
    const logout = document.querySelector("#logout");
    const photo = document.querySelector("#photo");
    const login = document.querySelector("#login");
    const search = document.querySelector("#search");

    lupita.addEventListener("click", function(e){
        if (nombre != "anonymous"){
            nombre.style.display= "none";
        }
    })
    lupita.addEventListener("click", function(e){
        if (logout != "anonymous"){
            logout.style.display= "none";
        }
    })
    lupita.addEventListener("click", function(e){
        if (photo != "anonymous"){
            photo.style.display= "none";
        }
    })
    lupita.addEventListener("click", function(e){
        if (login != "anonymous"){
            login.style.display= "none";
        }
    })
    lupita.addEventListener("click", function(e){
        search.style.display= "block";
        search.style.width= "100%";
    })
}