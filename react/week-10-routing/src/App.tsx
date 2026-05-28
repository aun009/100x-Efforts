
import { useRef, useState } from "react"
import { BrowserRouter, Routes, Route, Link, useNavigate, Outlet } from "react-router-dom"


















function App() {

  const [currCnt, setCurrCnt] = useState(0);

  const timer = useRef()

  function startClock() {
    let value = setInterval(()=> {
      setCurrCnt((prevCnt) => prevCnt + 1)
    } , 1000)

    timer.current = value
  }

  function stopClock() {
    clearInterval(timer.current)
  }

  return <div>

    {currCnt}
    <br />

    <button onClick={startClock}>Start</button>
    <button onClick={stopClock}>Stop</button>

  </div>
}











// trying to use there, useref

function App4() {

  const inputRef = useRef<HTMLInputElement>(null);

  return <div>
    Sign Up

    <input ref={inputRef} id="name" type="text" />
    <input type="text" />

    <button onClick={()=> {
      // document.getElementById("name")?.focus()// insted of this use useRef
      inputRef.current?.focus()
    }}>Submit</button>
  </div>
}
















function App2() {
  // to implement something like , when user goes to the internship section after 10 seconds he will be redirected to the jobs section 
  return <div>

     // this content will be on all the pages
      
    <BrowserRouter>
      
      <Routes>
        {/* this below is the super route, to use, its all the components are rendered inside the Outlet there  */}
        <Route path="/" element={<Layout/>}> 
          <Route path="/startup" element={<StartUp/>}/>
          <Route path="/internship" element={<Internship/>}/>
          <Route path="/job" element={<Job/>}/>
          <Route path="*" element={<ErrorPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>

  </div>

}

function Layout() {
  return <div>
    <Link to="/startup">StartUp</Link>  |  <Link to="/internship">Internship</Link>  | <Link to="job">Job</Link>
    This will be at top
    <Outlet/>

    footer
  </div>
}

function ErrorPage() {
  return <div>
    <img src="https://media.newyorker.com/photos/59095bb86552fa0be682d9d0/master/pass/Monkey-Selfie.jpg" alt="ok" />
  </div>
}

function Internship() {

  const navigate = useNavigate()


  return <div>
    Internship

    <button onClick={()=> {
      navigate("/job")
    }}>Go to job page</button>
  </div>
}

function Job() {
  return <div>
    Job
  </div>
}

function StartUp() {
  return <div>
    Startup Page buddy
  </div>
}

export default App