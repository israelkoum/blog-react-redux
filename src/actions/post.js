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
        .then(response => {
            console.log(response)
            dispatch({
                type:'READ_POSTS',
                payload:response
            })
        })
        .catch(error => console.error(error))

    }
}

// payload c'est la valeur 