import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from 'react'
import axios from 'axios'

function Allposts(){
 
    const posts = useSelector(state=>state.posts);
    const state = useSelector(state=>state);

    const dispatch = useDispatch();
    useEffect(()=>{

     axios
     .get('https://jsonplaceholder.typicode.com/posts')
     .then(response =>{
      
         dispatch({type:'FETCH_SUCCESS',payload: response.data})
     })
     .catch(err=>{
        dispatch({type:'FETCH_ERROR'})
     })}
    ,[])
    
    
    function handleDelete(id){
        axios.delete('https://jsonplaceholder.typicode.com/posts/'+id)
        console.log(posts.post[2])
    }

    function handleLike(id){
        //update if id does not exist
        if(state.likes.liked.indexOf(id)===-1){
            dispatch({type: 'LIKE',payload:id})
        }
        console.log(state.likes.liked)
    }

    function handleDislike(id){
        //update if id does not exist
        if(state.dislikes.disliked.indexOf(id)===-1){
            dispatch({type: 'DISLIKE',payload:id})
            console.log(state.dislikes.disliked)
        }
    }

    const Allposts=()=>{
        return(
            <div>
             {posts.post.map((p)=>(
                <div id={p.id}>
                    <p>{p.id}</p>
                    <p>{p.title}</p>
                    <button onClick={()=>handleDelete(p.id)}>delete</button>
                    <button onClick={()=>handleLike(p.id)}>like</button>
                    <button onClick={()=>handleDislike(p.id)}>dislike</button>
                    <hr></hr>
                </div> 
             ))}
            </div>
        )
    }
     
    console.log(posts.post.data)
    return(
        <div>
           {posts.loading ? 
           'Loading...'
                :
            <Allposts/>  
           }
        </div>
    )
}

export default Allposts