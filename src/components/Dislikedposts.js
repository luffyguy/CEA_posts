import React from 'react';
import {useSelector} from 'react-redux';



function Disikedpost(){
    const dislikes = useSelector(state=>state.dislikes);
    const posts = useSelector(state=>state.posts.post);

    return(
        <div> disliked posts
            {dislikes.disliked.map(id=>(
                <div id={id}>
                    {posts[id-1].id} : {posts[id-1].title}
                    <hr></hr>
                </div>
            ))} 
        </div>
    )
}

export default Disikedpost