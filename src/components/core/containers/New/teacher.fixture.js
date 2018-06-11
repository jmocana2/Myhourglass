import React from 'react';
import Teacher from './'

export default [
  {
    name: "prueba",
    namespace: 'dashboard/teachers',
    component: Teacher,
    props: {
      name: "Paco",
      twitter: "PacoTui",
      children: (
        <div>
          <p>Fixture ain't afraid of JSX</p>
          <p>Fixture ain't afraid of nothin!</p>
        </div>
      )
    }
  },
  {
    component: Teacher,
    props: {
      name: "Jose",
      twitter: "jmocana2"
    }
  }
];