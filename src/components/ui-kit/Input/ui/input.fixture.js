import Input from './'

export default [
  {
    name: "Input",
    component: Input,
    background: {
      backgroundColor: '#3e50b4',
      display:'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }
  },
  {
    name: "Textarea",
    component: Input,
    props: {
      multiline: true,
    },
    background: {
      backgroundColor: '#3e50b4',
      display:'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh'
    }
  }
];