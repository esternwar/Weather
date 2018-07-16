import React, { Component } from 'react';
import Context from '../context';
import CityList from './cityList';
import axios from 'axios';
import './styles.css';
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
        if(this.original(this.state.name)){

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
                }
            )
               .catch((error)=>{
                alert("Ошибка запроса!\nГорода нет в базе данных");
            })
        }
 
    }

    original(name){
        let myst = "";
        for(myst of this.state.cities){
            
            if(myst.name == name){
                return false;
            }
        }
        return true;
    }


    updateWeather(){
        let myst = "";
        var i = 0;
        var temperature = 0;
        for(myst of this.state.cities){
            
            let cityName = myst.name;
            let query = 'https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="'+cityName
            +'") and u="c" &format=json&env=store://datatables.org/alltableswithkeys';    
            axios.get(query)
            .then((response)=>{
                
                temperature = response.data.query.results.channel.item.condition.temp;      
                }
            )

        }
    }


    render(){

        return(
            <div>
                <input type="text" value={this.state.setCityName} onChange={this.setCityName}/> <input type="submit" value="Выбрать" onClick={() => this.selectCity(this.state)}/>
                <br/>
                <input type="submit" value="Обновить погоду" onClick={() => this.updateWeather()} id="update"/>
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