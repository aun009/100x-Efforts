import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'

function App() {
  // establish the ws connection, as when ever this gets called there, we dont need to establish connection again, so use useEffect

  const inputRef = useRef();
  const [socket, setSocket] = useState();

  function sendMessage() {
    if(!socket) {
      return;
    }

    const message = inputRef.current.value

    socket.send(message);
  }

  
  useEffect(()=> {
    const ws = new WebSocket("ws://localhost:8080")
    setSocket(ws)

    ws.onmessage = (ev) => {
      alert(ev.data)
    }
    return () => {
      ws.close();
    };
  },[])

  return (
    <div>
      <input ref={inputRef} type="text" placeholder='enter msg' />
      <button onClick={sendMessage}>Send</button>
    </div>
  )
}

export default App
