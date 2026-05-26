import axios from "axios"
import {  useEffect, useState } from "react"

function App() {

  const [user, setuser] = useState([])

  useEffect(()=> {
      axios.get("https://jsonplaceholder.typicode.com/users")
      .then(resource => {
        setuser(resource.data)
      })
  }, [])

  console.log(user);

  const [post, setPost] = useState([])



  const postElements = post.map((p, index) => (
    <PostComponent key={index} title={p.title} desc={p.desc}/>
  ));


  function addPost() {
    setPost([...post, {
      title : "Gym",
      desc : "go to gym"
    },]);
  }
  
  const [count, setcount] = useState(0);

  // setInterval(setcount(count+1), 1000);

  return <div>
    {/* <ToggleMessage/>
    {user.map(user => <PostComponent name={user.name} email={user.email} />)} */}


      {/* <NotifyCountInc/>
      <NotifyCountInc/>
      <NotifyCountInc/> */}

      {/* <button onClick={addPost}>Add post</button>
      <div>
        {postElements}
      </div> */}

      <div>
        {count}
      </div>

      <img src="https://static.vecteezy.com/system/resources/thumbnails/022/151/493/small_2x/bell-notification-icon-symbol-image-illustration-of-the-alarm-alert-symbol-in-eps-10-vector.jpg" alt="img" width={40} style={{margin: 40}} />
      
      <button onClick={()=> {
        setcount(count + 1)
      }}>Click me</button>

      
    
  </div>

}



function NotifyCountInc() {
  const [notifyCnt, setNotifyCnt] = useState(0);

  return <div>
    <button onClick={()=>{
      setNotifyCnt(notifyCnt + 1)
    }}>
      increase
    </button> {notifyCnt}
  </div>
}

function PostComponent(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h4>{props.desc}</h4>
    </div>
  );
}




function ToggleMessage() {
  const [isVisible, setIsVisible] = useState(true);
  // when the val of state variable changes, 

  return <div>
    <button onClick={()=> {
      setIsVisible(!isVisible)
    }}>
      Toggle Msg
    </button>

    {isVisible && <p>conditionally rendered</p>}
  </div>
}

export default App