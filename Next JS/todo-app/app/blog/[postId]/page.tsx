import axios from "axios";

export default async function BlogPost({params} : any) {

    const postId = (await params).postId;

    const response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${postId}`)
    const data = response.data

    return <div>

        title - {data.title}
        
    </div>
}