import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from 'react'
import axios from 'axios'

function Allposts(){
 
    const posts = useSelector(state=>state.posts);
    const likes = useSelector(state=>state.likes);
    const dislikes = useSelector(state=>state.dislikes);

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
    ,[dispatch])
    
    
    function handleDelete(id){
        axios.delete('https://jsonplaceholder.typicode.com/posts/'+id)
    }

    function handleLike(id){
        //update if id does not exist in liked or disliked

        if(likes.liked.indexOf(id)===-1 && dislikes.disliked.indexOf(id)===-1 ){
            dispatch({type: 'LIKE',payload:id})
        }  

         //if post was previously disliked then remove from dislikes and add to like

        else if(likes.liked.indexOf(id)===-1 && dislikes.disliked.indexOf(id)!==-1){
            dispatch({type: 'LIKE',payload:id})
            dislikes.disliked.splice(dislikes.disliked.indexOf(id),1)
            dispatch({type: 'REMOVE_DISLIKE',payload:dislikes.disliked})
        }
    }

    function handleDislike(id){

        //update if id does not exist in liked or disliked

        if(dislikes.disliked.indexOf(id)===-1 && likes.liked.indexOf(id)===-1){
            dispatch({type: 'DISLIKE',payload:id})
        }

         //if post was previously liked then remove from likes and add to dislikes

        else if(likes.liked.indexOf(id)!==-1 && dislikes.disliked.indexOf(id)===-1){
            dispatch({type: 'DISLIKE',payload:id})
            likes.liked.splice(likes.liked.indexOf(id),1)
            dispatch({type: 'REMOVE_LIKE',payload:likes.liked})
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