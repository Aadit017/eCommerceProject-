const INTIAL_STATE ={ 
    currentUser:null // null -> false 
}
const userReducer =(state=INTIAL_STATE, action ) =>{ 
    switch (action.type) { 
        case 'SET_CURRENT_USER':
            return {
                ...state, 
                currentUser:action.payload 
            }
        default:
            return state // intial state 
    }
} 
export default userReducer
