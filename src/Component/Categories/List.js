import React, { Component } from 'react';
import { Context } from '../../App';
import { Link } from 'react-router-dom';


class CategoriesList extends Component {
    get = (getCategories) =>{
        
        fetch('http://localhost:3000/Categories', { method: 'GET' })
            .then(res => res.json())
            .then(json => {
                getCategories('s')
                // console.log(json)
            })
    }
    render() {
        return (
            <Context.Consumer>
                {
                    value => (
                        this.get(value.getCategories)
                        // value.state.categories.map(d => <Link to={`/categories/${d.id}`} key={d.id}><div>{d.name}</div></Link>)
                    )
                }
            </Context.Consumer>
        )
    }
}

export default CategoriesList;