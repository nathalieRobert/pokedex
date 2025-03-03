import React, { Component } from 'react';
import PokemonCard from './PokemonCard';
import axios from 'axios';

export default class PokemonList extends Component {

    state={
        url:"https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151",
        pokemon: null,
    }

    async componentDidMount(){
        const response = await axios.get(this.state.url)
        this.setState({pokemon: response.data['results']});
    }

    render() {
        return (
            <React.Fragment>
                {this.state.pokemon ? (
                    <div className='row'>
                        {this.state.pokemon.map(pokemon => (
                            <PokemonCard 
                                key={pokemon.name} 
                                name={pokemon.name} 
                                url={pokemon.url}
                            />
                        ))}
                    </div>
               ) : ( 
                   <h1>Loading Pokemon</h1>
               )}
            </React.Fragment>
        )
    }
}
