import { useState, useEffect } from "react";

const PostsListFetch = () => {
    const [userId, setUserId] = useState(1);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const controller = new AbortController();
        const fetchData = async() => {
            setLoading(true);
            setError(null);
            try{
                const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`, {
                    signal: controller.signal
                });

                if(!res.ok) {
                    throw new Error('Network response was not ok')
                }

                const data = await res.json();

                setPosts(data);
            } catch(error) {
                if(error.name !== 'AbortError'){
                    setError(error)
                }
            } finally {
                if (!controller.signal.aborted) {
                    setLoading(false)
                }
            }
            

        }

        fetchData();
        return () => {
            controller.abort();
        }
    }, [userId]);


    if(loading){
        return <p>Loading...</p>
    }

    if(error) {
        return <p>Error: {error.message}</p>
    }

    return(
        <ul>
            {
                posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))
            }
        </ul>
    )
}

export default PostsListFetch;