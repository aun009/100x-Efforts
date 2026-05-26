
import axios from "axios";
import { useState } from "react";

// let data;

// axios.get("https://jsonplaceholder.typicode.com/todos/")
//   .then(response => {
//     data = response.data
//   })


//   fetch("https://jsonplaceholder.typicode.com/todos/")
//     .then(data => {
//         return data.json()
//     })
//     .then(data => {

//     })


// react only re-renders components if a state variable changes

function App2() {

  const [data, setData] = useState([]) // as it is array so assigned it array there

  axios.get("https://jsonplaceholder.typicode.com/todos/")
    .then(response => {
      setData(response.data)
    })

  
    const [user, setUser] = useState({name : "Arun", age : 22})

    function age() {
      setUser({...user, age : 23})
    }


  return <div>
    
    {/* {data.map(todo => <Todo title={todo.title} completed={todo.completed}/>)} */}
    {user.name} {user.age}
    
    
  </div>
}

export default App2


function Todo(props) {

  // return here html sort of
  return <div style={{backgroundColor : "white", margin : 10, padding: 15, fontSize : 19}}>
    <h1>{props.title}</h1>
    <div>
      {props.completed}
    </div>
  </div>

}


// const [todos, setTodos] = useState(["Eat", "Sleep"]);

// function addTodo() {
//   // Read as: "Create a new array. Put all existing todos in it, then add 'Code'."
//   setTodos([...todos, "Code"]); 
  
//   // Result: ["Eat", "Sleep", "Code"]
// }



