import { createContext, useContext, useState } from "react"

const CounterContext = createContext()

interface CounterContextType {
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
}

function CounterProvider({children}) {
    const [counter, setCounter] = useState(0)

    return <CounterContext.Provider value={{ counter, setCounter }}>
        {children}
    </CounterContext.Provider>

    
}

function App7() {

    return <div>
        <Parent/>
    </div>

}

export default App7


function Parent() {
    return <div>
        <CounterProvider>
            <Increment/>
            <Decrement/>
            <Value/>
        </CounterProvider>
    </div>
}

function Increment() {
    // how to use provider values here
    const {counter, setCounter} = useContext(CounterContext)
    return <div>
        <button onClick={()=> {
            setCounter(counter+1)
        }}>Increase</button>
    </div>

}

// here instead of passing seperately wrap them with the context api, provider

function Decrement() {

    const {counter, setCounter} = useContext(CounterContext)

    return <div>
        <button onClick={()=> setCounter(counter - 1)}>Decrease</button>
    </div>
}

function Value() {
    const {counter} = useContext(CounterContext);
    return <p>{counter}</p>
}



// to minimize the re-renders more, use state management libraries, 
// can also do it using this context api, but above method is more easy to impl