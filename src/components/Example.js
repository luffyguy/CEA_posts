import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

function Create(){
    const counter = useSelector(state=>state);
    const dispatch = useDispatch();
    return (
    <div>
        <button
            onClick={()=>
                dispatch({
                    type: "CAR"
                })
            }>
                car
        </button>
        <h1>{counter.vehicle}</h1>
        <button
            onClick={()=>
                dispatch({
                    type: "BIKE"
                })
            }>
                bike
        </button>
    </div>
    )

}

export default Create;