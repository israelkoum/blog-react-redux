import React, {Component as ReactComponent} from 'react'
import { connect } from 'react-redux'
import CategoryNaruto from '../Components/CategoryNaruto'
import { readPosts } from '../actions/post'

class Naruto extends ReactComponent {
    constructor (props) {
    

        super (props)

        this.state = {
            categories: [],
            activCategory: ''
        }
    }

    // componentDidMount () {
    //     fetch("https://api.jikan.moe/v3/search/anime?q=naruto")
    //     .then(response => response.json())
    //     .then(({results}) => this.setState({listFilms: [...results]}))
    //     .then(() => {
    //         const listCategory = this.state.listFilms.reduce((acc, curr) => {
    //             if (!acc.includes(curr.type)) acc.push(curr.type)
    //             return acc
    //         }, [])
    //         this.setState({categories: [...listCategory]})
    //     })
    //     .then(() => console.log(this.state.categories))
    // }

    
    componentDidMount () {
        console.log('action')
        this.props.readPosts () 
        
        
    }

    componentDidMount () {

        if(this.props.listFilms) {
            const listCategory =  this.props.listFilms.reduce((acc, curr) => {
                if (!acc.includes(curr.type)) acc.push(curr.type)
                return acc
            }, [])
            this.setState({categories: [...listCategory]})
        }

    }

    renderCategories(category) {
        const listCategoryFilm = this.props.listFilms.filter(film => film.type === category)
        return <CategoryNaruto films={listCategoryFilm} category={this.state.activCategory} />
    }

    // deleted(id){
    //     const sortedList = this.state.listFilms.filter(elt => elt.mal_id !== id)
    //     this.setState({listFilms: [...sortedList]})
    // }
    

    render () {
        return (
            <div>
                <div className = "">
                    { this.state.categories.map((category, index) => <h3 key={index} onClick={() => this.setState({activCategory: category})} >{category}</h3>) }
                </div>
                <hr />
                { this.state.activCategory ? this.renderCategories(this.state.activCategory) : 'Aucun article à afficher'}
            </div>
        )
    }

    // render () {
    //     return (
    //         <div>
    //             Liste des films :
    //         </div>
    //     )
    // }
}

const mapStateToProps = (state, ownProps) => ({
    // ... computed data from state and optionally ownProps
    listFilms : state.posts 
  })
  
  const mapDispatchToProps = {
    // ... normally is an object full of action creators
    readPosts
  }

export default connect (mapStateToProps,mapDispatchToProps) (Naruto)