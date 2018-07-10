import React, { Component } from 'react';
import City from './city';
import './main.css';
import Context from '../context';

class CityList extends Component {

    Delite(id, city){
        this.props.del(id, city);
        this.props.city.pop();
    }


    render(){
        return(
            <div>
                
                <Context.Consumer>
                    {context => (context.map(el => <City key = {el.id} id={el.id}/> )) }
                </Context.Consumer>
            </div>
        )
    }
}


export default CityList;


/*
{this.props.city.map(el => <h2 key={el.id}>{el.name}  {el.temperature}&#176;C <input className = "delbtm" type="submit" value="del" onClick={()=>this.Delite(el.id, this.props.city)}/></h2>) }
                <br/>
 * /

/*
                <Context.Consumer>
                    {context => (context.map(el => <h2 id={el.id}>{el.name}  {el.temperature}&#176;C <input class = "delbtm" type="submit" value="del" onClick={()=> this.Delite(el.id)}/></h2>)) }
                </Context.Consumer>
                */