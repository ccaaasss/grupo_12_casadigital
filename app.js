//requiero paquetes y genero las variables(espress,path)
const express = require ('express');
const path = require ('path');
const app = express ();
const publicPath = path.resolve ('public');

app.use(express.static (publicPath));

//hago la peticion al server de las htmls
app.get ('/', (req,res) =>{
    res.sendFile (path.resolve ('views/home.html'))
})

//levanto server express en puerto 8000
app.listen (8000, () => {
    console.log ('Servidor corriendo en puerto 8000');
})