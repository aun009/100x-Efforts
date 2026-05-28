import { createContext, useContext, useState } from "react"
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import {counterAtom} from "./store/atoms/counter"



// now here using the recoil,
// dont re-render tha components which are not changed

// step 1) install recoil
// step 2) wrap the app component inside the recoilroot
// step 3) instead of state use atom
// step 4) store them in other folder there

function App() {

    return (
        <RecoilRoot>
            <Papa/>
        </RecoilRoot>
    )
}

function Papa() {
    
    return <div>
        <Count/>
        <Badhao/>
        {/* <KamKro/> */}
    </div>
}

function Count() {
    const count = useRecoilValue(counterAtom) // only this component will be re-rendered , cause it is subscribed to the value
    return <div>
        {count}
    </div>
}

function Badhao() {
    const setCount = useSetRecoilState(counterAtom)
    return <div>
        <button onClick={()=> {
            setCount((s) => s+1)
        }}>Badhao</button>
    </div>
}

export default App;



























const CountContext = createContext();

function CountProvider({children}) {

    const [count, setCount] = useState(0);

    return <CountContext.Provider value={{count, setCount}}> // this will be passed as obj
        {children}
    </CountContext.Provider>
}

function App5() {
    return <div>
        <Parent/>
    </div>
}

function Parent() {
    return <div>
        <CountProvider>
            <Value/>
            <Increment/>
            <Decrement/>
        </CountProvider>
    </div>
}

function Increment() {
    const {setCount} = useContext(CountContext)
    return <div>
        <button onClick={() => {
            setCount((curr) => curr + 1)
        }}>Increment</button>
    </div>
}

function Decrement() {
    const {setCount} = useContext(CountContext)

    return <div>
        <button onClick={() => {
            setCount((prev) => prev-1)
        }}>Decrement</button>
    </div>
}


function Value() {
    const {count} = useContext(CountContext)
    return <div>
        {count}
    </div>
}

// export default App5;