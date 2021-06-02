
const initState={
    id: '',
	title: '',
	body: ''
}

//defining action types
const editReducer = (state = initState, action)=>{
    switch (action.type){
        case 'EDIT_POST':
			return {
				...state,
				id: action.payload.id,
                title: action.payload.title,
                body: action.payload.body,
			}
		default:
			return state    
    }
}
export default editReducer;