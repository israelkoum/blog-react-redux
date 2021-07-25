
const initialState = []
 function postReducer (state = initialState, action) {
    switch (action.type) {
        case 'READ_POST':
            return action.payload
        case 'READ_POSTS':
            return action.payload
        case 'DELETE_POST':
            return state.filter(post => post !== action.payload)

        default:
            return state
    }
}

export default postReducer