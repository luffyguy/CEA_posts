import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {useEffect} from 'react'
import axios from 'axios'
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import useStyles from '../styles/allpostsStyle'
import { useHistory } from 'react-router-dom';

function Allposts(){
    const classes =useStyles();
    const history = useHistory();

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

    function handleEdit(id,title,body){
        const pst={
            id: id,
            title: title,
            body: body
        }
        dispatch({type: 'EDIT_POST',payload: pst})
        history.push('/edit')
    }

    const Allposts=()=>{
        return(
            <div>
             {posts.post.map((p)=>(
                <Paper elevation={0} className={classes.paper} id={p.id}>
                    <p>{p.id}</p>
                    <h4>{p.title}</h4>
                    <p>{p.body}</p>
                    <Button className={classes.btn1} onClick={()=>handleDelete(p.id)}>delete</Button>

                    <Button className={classes.btn1} onClick={()=>handleEdit(p.id,p.title,p.body)}>edit</Button>

                    <Button className={classes.likebtn} onClick={()=>handleLike(p.id)}>like</Button>
                    <Button className={classes.dislikebtn} onClick={()=>handleDislike(p.id)}>dislike</Button>
                </Paper> 
             ))}
            </div>
        )
    }
     

    return(
        <div className={classes.postContainer}>
           {posts.loading ? 
           'Loading...'
                :
            <Allposts/>  
           }
        </div>
    )
}

export default Allposts