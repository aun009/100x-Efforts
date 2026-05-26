import axios from "axios"
import { useState, useEffect } from "react"

function App() {

    const [todo, setTodo] = useState(1)



    return <div>

        
        <button onClick={() => {
            setTodo(1)
        }}>1</button>
        <button onClick={() => {
            setTodo(2)
        }}>2</button>
        <button onClick={() => {
            setTodo(3)
        }}>3</button>
        <button onClick={() => {
            setTodo(4)
        }}>4</button>
        <button onClick={() => {
            setTodo(5)
        }}>5</button>

        <Todo id={todo} />
    </div>

}


function Todo(props) {
    const [currTodoTitle, setCurrTodoTitle] = useState("")

    const id = props.id

    useEffect(()=> {
        axios.get("https://jsonplaceholder.typicode.com/todos/" + id)
            .then(response => {
                setCurrTodoTitle(response.data.title)
            })


            return function () {
                // here this is cleanup function , it stops previous thing
                console.log("id is " + id); // this runs first for the previous id there 
                // like if i call this fun for the id = 2 , then the control will reach here first , and it will log id = 1, so it calls previos thing first
                
            }
    }, [id])

    return <div>
        {currTodoTitle}
    </div>
}





// when click on 1st show them first to do 



export default App