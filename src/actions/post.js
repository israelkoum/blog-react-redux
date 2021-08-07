import axios from 'axios'

export function readPost(id){
    return {
        type:'READ_POST',
        payload:id
        
    }
}

let dataResult = []

export const readPosts = () => {
    return function (dispatch){
        axios({
            method:'GET',
            url:"https://api.jikan.moe/v3/search/anime?q=naruto"
            
        })
        .then(({data}) => {
            dispatch({
                type:'READ_POSTS',
                payload:data.results
            })
            return data.results

        })
        
        .then(getDataResult => {
            dataResult.push(...getDataResult)
            const listCategory =  dataResult.reduce((acc, curr) => {
                if (!acc.includes(curr.type)) acc.push(curr.type)
                return acc
            }, [])
            dispatch({
                type:'SET_CATEGORY',
                payload:listCategory
            })
            console.log(listCategory)
            return listCategory
        })
        
        .catch(error => console.error(error))

    }
}

export function readActivCategory(category){
    return function (dispatch){
        dispatch({
            type: 'READ_ACTIVCATEGORY',
            payload: category
        })
    }
}


export function deletePost (id) {

    return {
        type:'DELETE_POST',
        payload:id
    }
}


// payload c'est la valeur 