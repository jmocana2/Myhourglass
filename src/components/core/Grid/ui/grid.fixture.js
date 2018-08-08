import React from 'react';
import Grid from './';
import New from '../../containers/New';

const dataGrid = [
  {
    content: <New title="Prueba chunga AREA" description="No pongo la mano en el fuego" author="jmocana" />
  },
  {
    content: <New title="Prueba chunga AREA" description="No pongo la mano en el fuego" author="jmocana" />
  },
  {
    content: <New title="Prueba chunga AREA" description="No pongo la mano en el fuego" author="jmocana" />
  },
  {
    content: <New title="Prueba chunga AREA" description="No pongo la mano en el fuego" author="jmocana" />
  },
  {
    content: <New title="Prueba chunga AREA" description="No pongo la mano en el fuego" author="jmocana" />
  },
  {
    content: <New title="Prueba chunga AREA" description="No pongo la mano en el fuego" author="jmocana" />
  },
  {
    content: <New title="Prueba chunga AREA" description="No pongo la mano en el fuego" author="jmocana" />
  },
  {
    content: <New title="Prueba chunga AREA" description="No pongo la mano en el fuego" author="jmocana" />
  },
  {
    content: <New title="Prueba chunga AREA" description="No pongo la mano en el fuego" author="jmocana" />
  },
  {
    content: <New title="Prueba chunga AREA" description="No pongo la mano en el fuego" author="jmocana" />
  },
  {
    content: <New title="Prueba chunga AREA" description="No pongo la mano en el fuego" author="jmocana" />
  },
  {
    content: <New title="Prueba chunga AREA" description="No pongo la mano en el fuego" author="jmocana" />
  },  
  {
    content: <New title="Prueba chunga AREA" description="No pongo la mano en el fuego" author="jmocana" />
  }  
];

export default [
  {
    name: "Grid",
    component: Grid,
    props: { 
      typeArea: true,
      dataGrid
    } 
  } 
];