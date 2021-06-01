const initState={
    liked: []
}

const likesReducer = (state = initState, action)=>{
    switch (action.type){
        case 'LIKE':
			return {
                ...state,
                liked:state.liked.concat(action.payload) //payload is id of liked post 
            }
        case 'REMOVE_LIKE':
            return {
                  ...state,
                  liked: action.payload
            }  
		default:
			return state    
    }
}
export default likesReducer;