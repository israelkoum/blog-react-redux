import React from 'react'
import PostNaruto from './PostNaruto'


const CategoryNaruto = ({films, category, deleted}) => {
    
    return (
        <div>
            <h3>Vous êtes dans la category "{category}"</h3>
            <div className = "display-type">
                { films.map(film => <PostNaruto key={film.mal_id} film={film} deleted = {(id) => deleted(id)} />)}
            </div>
        </div>
    )

}
export default CategoryNaruto