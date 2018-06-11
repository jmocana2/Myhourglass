import React from 'react';
import New from './'

export default [
  {
    name: "Noticia props",
    namespace: 'dashboard/news',
    component: New,
    props: {
      title: "Pedro Duque, ministro de Ciencia, Innovación y Universidades; Dolores Delgado, de Justicia",
      description: "La nueva titular del Ministerio de Trabajo será Magdalena Valerio; Isabel Celaá se encargará de Educación",
      author: "Alejandro Ciriza"
    }
  },
  {
    name: "Noticia children",
    namespace: 'dashboard/news',
    component: New,
    props: {
      title: "Cospedal no se descarta: “Es una decisión personal que tengo que tomar",
      description: "La secretaria general del PP asegura que velará porque el proceso sea 'claro, rápido, eficaz y lo más representativo posible'",
      author: "Alejandro Ciriza",
      children: (
        <p><strong>Podemos añadir un children como propiedad</strong></p>
      )
    }
  }, 
  {
    name: "Noticia router",
    namespace: 'dashboard/news',
    component: New,
    url: '/about',
    props: {
      title: "Pedro Duque, ministro de Ciencia, Innovación y Universidades; Dolores Delgado, de Justicia",
      description: "La nueva titular del Ministerio de Trabajo será Magdalena Valerio; Isabel Celaá se encargará de Educación",
      author: "Alejandro Ciriza"
    }
  }  
];