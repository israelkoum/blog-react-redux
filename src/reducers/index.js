import postsReducer  from './post'
import categoriesReducer from './category'
import activCategoriesReducer from './activCategory'
 const rootReducer = {
    post: postsReducer,
    category: categoriesReducer,
    activCategory: activCategoriesReducer
    // shoes:shoesReducer,
    // bag:bagReducer
}
export default rootReducer