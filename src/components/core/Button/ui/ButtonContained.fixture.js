import ButtonContained from './ButtonContained'

export default [
  {
    name: "darkprimary",
    component: ButtonContained,
    props:{
      color: 'darkPrimary'
    },
    children: (
      'DarkPrimary Button'
    ),
    background: {
      backgroundColor: '#FFF',
      display:'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    },
    tp: true
  },
  {
    name: "primary",
    component: ButtonContained,
    props:{
      color: 'primary'
    },
    children: (
      'Primary Button'
    ),
    background: {
      backgroundColor: '#FFF',
      display:'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    },
    tp: true
  },
  {
    name: "lightPrimary",
    component: ButtonContained,
    props:{
      color: 'lightPrimary'
    },
    children: (
      'LightPrimary Button'
    ),
    background: {
      backgroundColor: '#FFF',
      display:'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    },
    tp: true
  },
  {
    name: "light",
    component: ButtonContained,
    props:{
      color: 'light'
    },
    children: (
      'Light Button'
    ),
    background: {
      backgroundColor: '#FFF',
      display:'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    },
    tp: true
  },
  {
    name: "dark",
    component: ButtonContained,
    props:{
      color: 'dark'
    },
    children: (
      'Dark Button'
    ),
    background: {
      backgroundColor: '#FFF',
      display:'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    },
    tp: true
  },
  {
    name: "accent",
    component: ButtonContained,
    props:{
      color: 'accent'
    },
    children: (
      'Accent Button'
    ),
    background: {
      backgroundColor: '#FFF',
      display:'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    },
    tp: true
  }
];