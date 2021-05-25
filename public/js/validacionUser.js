window.onload = function(){

    let email = document.querySelector("#email");
    let pass = document.querySelector("#password");
    let form = document.querySelector("#form");

    form.addEventListener("submit", function(e){
        let errores = [];
        // if(email != /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i){
        //     errores.push("Debe ingresar un formato de email válido");
        // }
        if(pass.value.length < 8 ){
            errores.push("Debe ingresar una contraseña de al menos 8 caracteres");
        }   
        if(errores.length > 0){
            e.preventDefault();
            let ulErrores = document.querySelector(".errores");
            ulErrores.innerHTML = "";
            errores.forEach(error => {
                ulErrores.innerHTML += "<li>" + error + "</li>"
            });
        }
})}