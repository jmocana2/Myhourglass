import React from 'react';
import Grid from './';
import New from '../../containers/New';


const gridTemplateArea = [
  '"header header header header"',
  '"highlight highlight highlight highlight"',
  '"new1 new2 new3 new4"',
  '"new5 new5 new6 new7"',
  '"new8 new8 news new9"',
  '"footer footer footer footer"'
]

const confGridArea = [
  {
    area: "header",
    content: <New title="Prueba chunga AREA" description="No pongo la mano en el fuego" author="jmocana" />
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
    area: "news"
  },  
  {
    area: "footer"
  }  
];

const confGridRowColumns = [
  {
    gridColumn: "start_column / end_column",
    gridRow: "start_header / start_highlight",
    content: <New title="Prueba chunga ROW&amp;COLUMNS" description="No pongo la mano en el fuego" author="jmocana" />
  },
  {
    gridColumn: "1 / 5",
    gridRow: "2 / 3"
  },
  {
    gridColumn: "1 / 2",
    gridRow: "start_rows"
  },
  {
    gridColumn: "2 / 3",
    gridRow: "3 / 4"
  },
  {
    gridColumn: "3 / 4",
    gridRow: "3 / 4"
  },
  {
    gridColumn: "4 / 5",
    gridRow: "start_rows"
  },
  {
    gridColumn: "1 / 3",
    gridRow: "4 / 5"
  },
  {
    gridColumn: "3 / 4",
    gridRow: "4 / 5"
  },
  {
    gridColumn: "4 / 5",
    gridRow: "4 / 5"
  },
  {
    gridColumn: "1 / 3",
    gridRow: "5 / 6"
  },
  {
    gridColumn: "3 / 4",
    gridRow: "5 / 6"
  },
  {
    gridColumn: "4 / 5",
    gridRow: "5 / 6"
  },  
  {
    gridColumn: "1 / 5",
    gridRow: "start_footer / end_footer"
  } 
];

export default [
  {
    name: "Grid",
    component: Grid,
    props: { 
      typeArea: true,
      gridTemplateArea, 
      confGridArea, 
      confGridRowColumns
    } 
  } 
];