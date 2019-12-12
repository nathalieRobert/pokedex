import React, { Component } from 'react';
import styled from 'styled-components';
import Spinner from './spinner.gif';
import {Link} from 'react-router-dom';

export default class PokemonCard extends Component {

    state={
        name: '',
        imageUrl: '',
        pokemonIndex: '',
        imageLoading: true,
        tooManyRequests: false
    };

  

    componentDidMount(){
        const {name, url} = this.props;
        const pokemonIndex = url.split('/')[url.split('/').length - 2];
        const imageUrl = `https://github.com/PokeAPI/pokeapi/blob/master/data/v2/sprites/pokemon/${pokemonIndex}.png?raw=true`

        this.setState({name, imageUrl, pokemonIndex});
    }

    render() {
        return (
            <div className="col-md-3 col-sm-6 mb-5">
         
                    <StyledLink to={`pokemon/${this.state.pokemonIndex}`}>
                        <Card className="card">
                            <h5 className="card-header">{this.state.pokemonIndex}</h5>
                            {this.state.imageLoading ? (
                                <img 
                                    src={Spinner} 
                                    alt="spinner" 
                                    style={{width: '10rem', height: '7rem'}} 
                                    className="card-img-top mx-auto d-block mt-1"/>
                            ) : null}
                            <Sprite className="card-img-top rounded mx-auto mt-2"
                                    onLoad={() => this.setState({imageLoading : false})}
                                    onError={() => this.setState({tooManyRequests : true})}
                                    src={this.state.imageUrl} 
                                    style={
                                            this.state.tooManyRequests ? { display: 'none'} :
                                            this.state.imageLoading ? null : {display: 'block'}
                                        }
                            />
                            {this.state.tooManyRequests ? (
                                <h6 className="mx-auto">
                                    <span className="badge badge-danger mt-2">too many requests !</span>
                                </h6>
                            ) : null}
                            <div className="card-body mx-auto">
                                    <h6 className="card-title text-capitalize">{this.state.name}</h6>
                            </div>
                            
                        </Card>
                    </StyledLink>
              
            </div>
        )
    }
}

const Sprite = styled.img `
width: 5em !important;
height: 5em !important;

`

const Card = styled.div`
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.82, 0.25, 1);
    &:hover{
        box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    }
    -moz-user-select: none;
    -website-user-select: none;
    user-select: none;
    -o-user-select: none;
`

const StyledLink = styled(Link)`
    text-decoration: none;
    color: black;
    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active{
        text-decoration: none;
    }

   
`
