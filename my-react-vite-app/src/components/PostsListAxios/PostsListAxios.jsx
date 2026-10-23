import { useState, useEffect } from "react";
import axios from "axios";

const PostsListAxios = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async() => {
            try{
                const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
                setData(res.data)
            } catch(error) {
                setError(error)
            } finally {
                setLoading(false)
            }
            

        }

        fetchData();
    }, [])
    
    if(loading){
        return <p>Loading...</p>
    }

    if(error) {
        return <p>Error: {error.message}</p>
    }

    return(
        <ul>
            {
                data.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))
            }
        </ul>
    )
}

export default PostsListAxios;