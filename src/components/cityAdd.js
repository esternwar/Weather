import React, { Component } from 'react';
import Context from '../context';
import CityList from './cityList';
import axios from 'axios';
class AddCity extends Component {
    constructor(){
        super();
        this.state = {
            cities: [
            ]
        };
        this.setCityName = this.setCityName.bind(this);
        this.selectCity = this.selectCity.bind(this);
    }

    setCityName(event){
        this.setState({name: event.target.value})
    }

    selectCity(name){
        let query = 'https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="'+this.state.name
            +'") and u="c" &format=json&env=store://datatables.org/alltableswithkeys';
        axios.get(query)
            .then((response)=>{
                let obj = {name: this.state.name, temperature: response.data.query.results.channel.item.condition.temp, id: this.state.cities.length};
                let temp = this.state.cities;
                temp.push(obj);
                this.setState(
                    {cities: temp}
                );
            })
            .catch((error)=>{
                alert("Ошибка запроса!");
            })

 
    }

    move(columnId, city){
        //alert(columnId);
        this.setState(
            {cities: 0}
        );
    }



    render(){

        return(
            <div>
                <input type="text" value={this.state.setCityName} onChange={this.setCityName}/> <input type="submit" value="Выбрать" onClick={() => this.selectCity(this.state)}/>
                <br/>
                <Context.Provider value={this.state.cities}>
                    <CityList />
                </Context.Provider>
            </div>
        )
    }
}


export default AddCity;
/*
<Context.Provider value={this.state.cities}>
    <CityList />
</Context.Provider>
*/


/*
<CityList city={this.state.cities} del={this.move}/>
                <br/>
                <br/>
                
                */