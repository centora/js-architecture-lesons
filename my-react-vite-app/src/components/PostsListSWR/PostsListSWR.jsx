import { useState, useEffect } from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());



const PostsListAxios = () => {
    const {data, error} = useSWR(
        "https://jsonplaceholder.typicode.com/posts",
        fetcher
    )
    
    if(!data){
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