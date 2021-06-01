import React from 'react';
import {useSelector} from 'react-redux';



function Disikedpost(){
    const likes = useSelector(state=>state.likes);
    const posts = useSelector(state=>state.posts.post);

    return(
        <div> liked posts
            {likes.liked.map(id=>(
                <div id={id}>
                    {posts[id-1].id} : {posts[id-1].title}
                    <hr></hr>
                </div>
            ))} 
        </div>
    )
}

export default Disikedpost