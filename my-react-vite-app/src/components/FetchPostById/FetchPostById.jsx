import {useState, useEffect}  from 'react';

const FetchPostById = () => {
    const [postId, setPostId] = useState(1)

    return (
        <div>
            <h2>Post # {postId} - details</h2>

        </div>
    )

}

export default FetchPostById;