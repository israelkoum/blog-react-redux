const initialStateCategory = []

 function categoriesReducer (state = initialStateCategory, action) {

    switch (action.type) {
        case 'SET_CATEGORY':
           return action.payload
    
        default:
            return state
    }
}

export default categoriesReducer