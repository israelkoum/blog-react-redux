import axios from 'axios'

export function readPost(id){
    return {
        type:'READ_POST',
        payload:id
        
    }
}



export const readPosts = () => {
    return function (dispatch){
        axios({
            method:'GET',
            url:"https://api.jikan.moe/v3/search/anime?q=naruto"
            
        })
        .then(({data}) => {
            console.log(data.results)
            dispatch({
                type:'READ_POSTS',
                payload:data.results
            })
        })
        .catch(error => console.error(error))

    }
}

export function deletePost (id) {

    return {
        type:'DELETE_POST',
        payload:id
    }
}
// payload c'est la valeur 