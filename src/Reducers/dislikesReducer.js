const initState={
   disliked: []
}

const likesReducer = (state = initState, action)=>{
   switch (action.type){
      case 'DISLIKE':
        return {
               ...state,
               disliked:state.disliked.concat(action.payload) //payload is id of disliked post 
        }
      case 'REMOVE_DISLIKE':
        return {
          ...state,
          disliked: action.payload
        }  
      default:
        return state    
   }
}
export default likesReducer;