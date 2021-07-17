import React, {Component as ReactComponent} from 'react'
import CategoryNaruto from '../Components/CategoryNaruto'

class Naruto extends ReactComponent {
    constructor () {
    

        super ()

        this.state = {
            listFilms: [],
            categories: [],
            activCategory: ''
        }
    }

    componentDidMount () {
        fetch("https://api.jikan.moe/v3/search/anime?q=naruto")
        .then(response => response.json())
        .then(({results}) => this.setState({listFilms: [...results]}))
        .then(() => {
            const listCategory = this.state.listFilms.reduce((acc, curr) => {
                if (!acc.includes(curr.type)) acc.push(curr.type)
                return acc
            }, [])
            this.setState({categories: [...listCategory]})
        })
        .then(() => console.log(this.state.categories))
    }

    renderCategories(category) {
        const listCategoryFilm = this.state.listFilms.filter(film => film.type === category)
        return <CategoryNaruto films={listCategoryFilm} category={this.state.activCategory} deleted = {(id) => this.deleted(id)} />
    }

    deleted(id){
        const sortedList = this.state.listFilms.filter(elt => elt.mal_id !== id)
        this.setState({listFilms: [...sortedList]})
    }
    

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
}

export default Naruto