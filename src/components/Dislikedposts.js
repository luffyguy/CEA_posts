import React from 'react';
import {useSelector} from 'react-redux';
import Paper from '@material-ui/core/Paper';
import useStyles from '../styles/allpostsStyle'


function Disikedpost(){
    const classes=useStyles();

    const dislikes = useSelector(state=>state.dislikes);
    const posts = useSelector(state=>state.posts.post);

    return(
        <div className={classes.postContainer} > 
            <h2>Disliked posts </h2>
            {dislikes.disliked.map(id=>(
                <Paper className={classes.paper} id={id}>
                    <p>{posts[id-1].id}</p> 
                    <h4>{posts[id-1].title}</h4>
                    <p>{posts[id-1].body}</p>
                </Paper>
            ))} 
        </div>
    )
}

export default Disikedpost