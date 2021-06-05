import React from 'react';
import SmallCard from './SmallCard';

/*  Cada set de datos es un objeto literal */

/* <!-- Courses in DB --> */

let coursesInDb = {
    title: 'Cursos en la Base de datos',
    color: 'primary', 
    cuantity: '21',
    icon: 'fa-clipboard-list'
}

/* <!-- Categories in DB --> */

let categoriesInDb = {
    title:'Categorias en la Base de Datos', 
    color:'success', 
    cuantity: '15',
    icon:'fa-award'
}

/* <!-- Users in DB --> */

let usersInDb = {
    title:'Cantidad de usuarios registrados' ,
    color:'warning',
    cuantity:'49',
    icon:'fa-user-check'
}

let cartProps = [coursesInDb, categoriesInDb, usersInDb];

function ContentRowMovies(){
    return (
    
        <div className="row">
            
            {cartProps.map( (course, i) => {

                return <SmallCard {...course} key={i}/>
            
            })}

        </div>
    )
}

export default ContentRowMovies;