import { createContext, useContext, useState } from "react"

const BulbCOntext = createContext()


  function BulbProvider({children}) {
    const [onBulb, setonbulb] = useState(true)

      <BulbCOntext.Provider onBulb={onBulb}, setonbulb={setonbulb}>
        {children}
      </BulbCOntext.Provider>
  }

function App2() {

  return <div>

    <BulbCOntext.Provider value={{ // it will return me obj
      name : "Arun"
    }}>

      <LightBulb/>

    </BulbCOntext.Provider>
    
  </div>

}

function LightBulb() {

  // context api fixes the prob of prop drilling
  // its 3 termonologies are like 
  // 1) create context
  // 2) provider
  // 3) consumer



  const [onbulb, setonbulb] = useState(true) // first of all this is at the bulb state, cause bulb state needs only the onbulb and togglebulb state need the
  // setonbulb, so move it to its just up parent , its this light bulb, so  we can pass it as the prop
  return <div>
    <BulbState bulbOn={onbulb}/>
    <ToggleBulbState bulbOn={onbulb} setBulbOn={setonbulb}/>
  </div>
}

// props goes from parent to child , they can also go from child to parent too , but that is anti pattern using the callback

function BulbState(props) {

  const {name} = useContext(BulbCOntext) // use it like this 

  return <div>
     {props.bulbOn ? "bulb is on" : "bulb is off"}
  </div>


}

// so eventually we will get our all the states to the top parent, thats why we use state management

function ToggleBulbState({bulbOn, setBulbOn}) {
  return <div>
    <button onClick={()=> {
      setBulbOn((prev) => !prev) // the first prev is the current state
    }}>Toggle the bulb</button>
  </div>
}


export default App2