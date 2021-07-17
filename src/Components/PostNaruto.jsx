import React from 'react'

const PostNaruto = ({film, deleted}) => {

    return (
        <div>
            <img src = {film.image_url} alt=""/>
            <p> <b>Title: </b>{film.title}</p>
            <p> <b>synopsis: </b>{film.synopsis}</p>
            <button onClick ={() => deleted(film.mal_id)}>Supprimer </button>           
        </div>
    )
}

export default PostNaruto