import React, { Component } from 'react';
import City from './city';
import './main.css';
import Context from '../context';

class CityList extends Component {

    Delite(){

    }


    render(){
        return(
            <div>
                {this.props.city.map(el => <h2 id={el.id}>{el.name}  {el.temperature}&#176;C <input class = "delbtm" type="submit" value="del" onClick={()=>this.Delite()}/></h2>) }

            </div>
        )
    }
}


export default CityList;


/*
                <Context.Consumer>
                    {context => (context.map(el => <h2 id={el.id}>{el.name}  {el.temperature}&#176;C <input class = "delbtm" type="submit" value="del" onClick={()=> this.Delite(el.id)}/></h2>)) }
                </Context.Consumer>
                */