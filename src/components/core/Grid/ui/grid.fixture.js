import React from 'react';
import Grid from './'

const gridTemplateArea = [
  '"header header header header"',
  '"highlight highlight highlight highlight"',
  '"new1 new2 new3 new4"',
  '"new5 new5 new6 new7"',
  '"new8 new8 news new9"',
  '"footer footer footer footer"'
]

const confGrid = [
  {
    area: "header"
  },
  {
    area: "highlight"
  },
  {
    area: "new1"
  },
  {
    area: "new2"
  },
  {
    area: "new3"
  },
  {
    area: "new4"
  },
  {
    area: "new5"
  },
  {
    area: "new6"
  },
  {
    area: "new7"
  },
  {
    area: "new8"
  },
  {
    area: "new9"
  },
  {
    area: "footer"
  }  
];

export default [
  {
    name: "Grid",
    component: Grid,
    props: { confGrid, gridTemplateArea } 
  } 
];