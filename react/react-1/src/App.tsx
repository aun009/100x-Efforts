
function App() {

    // instead of hardcoading the posts in the below Post components, what to do 
    // like imagive structure will look like , i am getting data from the db , with axious
    // imagine like i will get data like this from the database, how to render this in the Post component

    const posts = [
        {
            name : "Arun",
            content : "lets go"
        },
        {
            name : "Yash",
            content : "good days"
        },
        {
            name : "Harsha",
            content : "nice day"
        }
    ];

    // in this js/ts section we can also write some html there sometimes
    // convert array of obj to array of components
    // user {} braces to render the values from the js/ts section, and also use {{}} for the styles

    const postComponents = posts.map(p => <Post name={p.name} content={p.content}/>)

    return (
        <div>
            
            <h1>LinkedIn!!!!!!!!</h1>

            {postComponents}


            {/* <Post name="Arun" content="something crazy will happen"/>
            <Post name="Yash" content="good days"/>
            <Post name="Harsha" content="nice day"/>
            <Post /> */}

        </div>
    )
}
// this function returns something like html, and thia above is called as the component in react


export default App


// before i used functions like this, and they return some normal types 

function sum(a: number, b : number) : number {
    return a+b;
}

// it can take only one parameter as the input 

/*
    props = {name : "Arun", content : "i am good"}
*/

function Post(props) {
    return <div style={{backgroundColor : "white", fontSize: 20, margin : 20, padding: 10, borderRadius: 10 , border: "2px solid black"}}>
        <div>{props.name}</div>
        <div>
            {props.content}
        </div>
    </div>
}

// so i need to render this in the app component, like overall app component is gets posted there, on front screen


// components are jsut reusable pieces, based on props they can render diff diff things there