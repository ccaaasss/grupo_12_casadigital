const express= require('express');

const path=require('path')

const publicPath=path.resolve('public');

const app= express()

app.use(express.static(publicPath));

app.get('/',function (req,res){
       res.sendFile(path.resolve(__dirname,'./views/index.html'))
})

app.listen (3000, () =>{
    console.log('Servidor corriendo en el puerto 3000');
})
