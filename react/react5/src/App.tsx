import { useState } from 'react'

import './App.css'







function App() {

  const todos = [{
    title : "gym",
    isDone : false
  },
  {
    title : "study",
    isDone : true
  }
]



  return <div>
    {todos.map((t, index) => <Todo key={index} title={t.title} isDone={t.isDone} />)}
  </div>
}

export default App

function Todo(props) {
  return <div>
    <h1>{props.title}</h1>

    {props.isDone ? "Done" : "not done"}
  </div>
}



















// function App() {
//   const [count, setCount] = useState(0)

//   return <div>
//     <Card children={<div>hi there</div>}/>
//     <Card children={<input></input>}/>
//     <Card children={<textarea></textarea>}/>
//     <Card children={<button>All Good</button>}/>

//     // we can also pass like this 
//     <Card>
//       <h4>hi there</h4>
//       <input type="text" />
//     </Card>
//   </div>
// }


// function Card({children}) {
//   return  <div style={{backgroundColor: "black", color : "white", borderRadius : 10, padding: 10, margin:15}}>
//     {children}
//   </div>
// }

// export default App
