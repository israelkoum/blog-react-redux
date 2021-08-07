const initialState = ''

 function activCategoriesReducer (state = initialState, action) {

    switch (action.type) {
        case 'READ_ACTIVCATEGORY':
           return action.payload
    
        default:
            return state
    }
}

export default activCategoriesReducer