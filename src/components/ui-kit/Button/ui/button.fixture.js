import Button from './'

export default [
  {
    name: "Button",
    component: Button,
    props: {
      disabled: false,
    },
    children: (
      'Mi botón'
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