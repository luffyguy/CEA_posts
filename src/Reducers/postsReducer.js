
const initState={
    loading: true,
	error: '',
	post: {}
}

//defining action types
const postsReducer = (state = initState, action)=>{
    switch (action.type){
        case 'FETCH_SUCCESS':
			return {
				loading: false,
				post: action.payload,
				error: ''
			}
		case 'FETCH_ERROR':
			return {
				loading: false,
				post: {},
				error: '500!'
			}
		default:
			return state    
    }
}
export default postsReducer;