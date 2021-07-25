import React from 'react'
import { connect } from 'react-redux'
import { deletePost } from '../actions/post'


class PostNaruto extends React.Component {

    constructor(props) {
        super(props)
    }

   
    render () {
        const { image_url, title, synopsis } = this.props.film
        return (
            <div>
            <img src = {image_url} alt=""/>
            <p> <b>Title: </b>{title}</p>
            <p> <b>synopsis: </b>{synopsis}</p>
            {/* <button onClick ={() => deleted(mal_id)}>Supprimer </button>            */}
        </div>
        )
    }

}


export default connect (null, null)(PostNaruto)