import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef, useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
function App() {
    // establish the ws connection, as when ever this gets called there, we dont need to establish connection again, so use useEffect
    const inputRef = useRef();
    const [socket, setSocket] = useState();
    function sendMessage() {
        if (!socket) {
            return;
        }
        const message = inputRef.current.value;
        socket.send(message);
    }
    useEffect(() => {
        const ws = new WebSocket("ws://localhost:8080");
        setSocket(ws);
        ws.onmessage = (ev) => {
            alert(ev.data);
        };
        return () => {
            ws.close();
        };
    }, []);
    return (_jsxs("div", { children: [_jsx("input", { ref: inputRef, type: "text", placeholder: 'enter msg' }), _jsx("button", { onClick: sendMessage, children: "Send" })] }));
}
export default App;
//# sourceMappingURL=App.js.map