import { useEffect, useState } from "react"


function App() {

  const [count, setcount] = useState(0)

  function incCount() {
    // setcount(count + 1); // here the val we get, is starts from the above usestate 0, thats why it is slow, performance issue
    setcount((currCnt) => { // the input we get is the current val, and we process that 
      return currCnt + 1
    })
  }

  useEffect(()=> {
    let timer =  setInterval(incCount, 1000)
    // Whenever you start a timer in a useEffect, you must tell React how to clean it up by returning a function:
    return function() {
      clearInterval(timer) // clearInterval fixes this by making sure the old stopwatch is destroyed before a new one is ever created.
    }
  }, [])

  return <div>
      {count}
  </div>

}


export default App