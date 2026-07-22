import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [currentRoom, setCurrentRoom] = useState<string>('');
  const [joined, setJoined] = useState<boolean>(false);
  const [messages, setMessages] = useState<string[]>([]);
  
  const messageInputRef = useRef<HTMLInputElement>(null);
  const roomInputRef = useRef<HTMLInputElement>(null);

  // Initialize connection
  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080")
    setSocket(ws)

    ws.onmessage = (e) => {
      try {
        const data = JSON.parse(e.data);
        if (data.type === 'chat') {
          setMessages((prev) => [...prev, data.payload.message]);
        }
      } catch (err) {
        // Fallback if message is not in JSON format
        setMessages((prev) => [...prev, e.data]);
      }
    }

    return () => {
      ws.close();
    }
  }, []);

  function joinRoom() {
    if (!roomInputRef.current || !socket) return;
    const roomId = roomInputRef.current.value.trim();
    if (!roomId) return;

    // Send the join payload
    socket.send(JSON.stringify({
      type: "join",
      payload: {
        roomId: roomId
      }
    }));
    
    setCurrentRoom(roomId);
    setJoined(true);
  }

  function sendMessage() {
    if (!messageInputRef.current || !socket) return;
    const message = messageInputRef.current.value.trim();
    if (!message) return;

    // Send the chat payload matching backend expectation
    socket.send(JSON.stringify({
      type: "chat",
      payload: {
        message: message
      }
    }));

    messageInputRef.current.value = '';
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif', maxWidth: '400px', margin: '0 auto' }}>
      <h2>Chat Application</h2>
      
      {!joined ? (
        <div style={{ display: 'flex', gap: '10px', flexDirection: 'column' }}>
          <label>Enter Room ID to Join:</label>
          <input 
            ref={roomInputRef} 
            type="text" 
            placeholder="Room ID" 
            style={{ padding: '8px', fontSize: '16px' }}
          />
          <button onClick={joinRoom} style={{ padding: '8px', fontSize: '16px', cursor: 'pointer' }}>
            Join Room
          </button>
        </div>
      ) : (
        <div>
          <p>Joined Room: <strong>{currentRoom}</strong></p>
          
          <div style={{ 
            border: '1px solid #ccc', 
            borderRadius: '4px', 
            height: '200px', 
            overflowY: 'scroll', 
            padding: '10px',
            marginBottom: '10px',
            background: '#f9f9f9',
            textAlign: 'left'
          }}>
            {messages.length === 0 ? (
              <em style={{ color: '#888' }}>No messages yet</em>
            ) : (
              messages.map((msg, index) => (
                <div key={index} style={{ margin: '5px 0', padding: '5px', background: '#eef', borderRadius: '4px' }}>
                  {msg}
                </div>
              ))
            )}
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <input 
              ref={messageInputRef} 
              type="text" 
              placeholder="Type a message..." 
              style={{ flex: 1, padding: '8px', fontSize: '16px' }}
              onKeyDown={(e) => { if (e.key === 'Enter') sendMessage(); }}
            />
            <button onClick={sendMessage} style={{ padding: '8px 16px', fontSize: '16px', cursor: 'pointer' }}>
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App

