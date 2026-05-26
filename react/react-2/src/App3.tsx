import axios from "axios"
import { useEffect, useState } from "react"


// the only first time this component is rendered
// will data be initialized to []
// in all future re-renders, it will not get
// re-initialized

// useState remembers your data from last time (it does not reset to []).

// but it stucks in infinite loop , cause of its property , if the val changes it re-renders
// then it again call that component


// any function that starts with the , use it is hook

function App3() {

    let [data, setData] = useState([])

    // 2nd hook, useEffect
    // if the 2nd argument is empty then
    // this block of code will only run one time, like it is mounted only once there
    // so it will fetch, and will stop
    // if we pass there argument in 2nd variable, then when that changes this is again called there
    // that 2nd arg is called , depedency array

    useEffect(()=> {
        axios.get("https://jsonplaceholder.typicode.com/todos")
            .then(response => {
                setData(response.data)
            })

            // here useEfect can also return other function
    }, [])

    // here this stuck in loop, req, goes to axios, set data again usestate , again req, same

    // axios.get("https://jsonplaceholder.typicode.com/todos")
    //     .then(response => {
    //         setData(response.data)
    //     })

    // setTimeout(()=> {
    //     setData([...data, {title : "hi there " + Math.random()}])
    // }, 1000)
    
    return <div>
        {data.map(d => <TodoC title={d.title} />)}
    </div>
}

export default App3

function TodoC(props) {
    return <div>
        <h1>{props.title}</h1>
    </div>
}


// React only re-renders the (components) if the state variable changes
// when the state variable changes the place where it changes , that components gets called again 