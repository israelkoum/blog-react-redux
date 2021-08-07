import React, {Component as ReactComponent} from 'react'
import { connect } from 'react-redux'
import CategoryNaruto from '../Components/CategoryNaruto'
import { readPosts, readActivCategory } from '../actions/post'

class Naruto extends ReactComponent {
    constructor (props) {

        super (props)

    }

    
    componentDidMount () {
        console.log('action')
        this.props.readPosts ()
    }
  
    renderCategories(category) {
        const listCategoryFilm = this.props.listFilms.filter(film => film.type === category)
        return <CategoryNaruto films={listCategoryFilm} category={this.props.activCategory} />
    }

    // deleted(id){
    //     const sortedList = this.state.listFilms.filter(elt => elt.mal_id !== id)
    //     this.setState({listFilms: [...sortedList]})
    // }
    
    render () {
        return (
            <div>
                <div className = "">
                    { this.props.categories.map((category, index) => <h3 key={index} onClick={() => this.props.readActivCategory(category)} >{category}</h3>) }
                </div>
                <hr />
                { this.props.activCategory ? this.renderCategories(this.props.activCategory) : 'Aucun article à afficher'}
            </div>
        )
    }

  
}

const mapStateToProps = (state, ownProps) => ({
    // ... computed data from state and optionally ownProps
    listFilms : state.post,
    categories : state.category,
    activCategory: state.activCategory
  })
  
  const mapDispatchToProps = {
    // ... normally is an object full of action creators
    readPosts,
    readActivCategory
  }

export default connect (mapStateToProps,mapDispatchToProps) (Naruto)