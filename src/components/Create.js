import React from 'react';
import useStyles from '../styles/inputStyle.js'
import { useState } from "react";

function Create(){
    const classes = useStyles();
    const [title,setTitle]=useState("");
    const [body,setBody]=useState("");
    const [error,setError] =useState("");
    const [success,setSuccess] =useState("");

    async function handleSubmit(e){
        e.preventDefault();
            await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify({
                    title: title,
                    body: body,
                    userId: 10,
                 }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            .then((response) => response.json())
            .then((res) =>{ 
                console.log(res)
                setTitle("");
                setBody("");
                setSuccess("Posted Successfully");
                setTimeout(()=>{
                    setSuccess("");
                },5000) 
            })
            .catch((err)=>{
                 setError(err);
                 setTimeout(()=>{
                     setError("");
                 },5000)   
            })

    }    

    return(
        <form className={classes.Form} onSubmit={handleSubmit}>
            {error && <span>{error}</span>}
            {success && <span className={classes.alert}>{success}</span>}
        <input className={classes.Input}
            type="text"
            id="standard-required"
            name="title" 
            required
            placeholder="Title"
            value={title}
            onChange={(e)=>setTitle(e.value)} 
        />
        <br/>
        <textarea className={classes.Textarea}
            id="standard-required" 
            name="body" 
            required
            placeholder="Body" 
            rows="5" cols="50"
            value={body}
            onChange={(e)=>setBody(e.value)}  
        > 
        </textarea>
        <br/>
        <input className={classes.Btn}
            type='submit'
            value="post"
            
        />

    </form>);
}

export default Create
