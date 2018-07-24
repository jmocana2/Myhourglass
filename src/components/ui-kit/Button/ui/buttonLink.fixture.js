import Button from './'

export default [
  {
    name: "Button Link",
    component: Button,
    props: {
      disabled: false,
      href: 'http://www.marca.es'
    },
    children: (
      'Ver marca'
    ),
    background: {
      backgroundColor: '#3e50b4',
      display:'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }
  }
];