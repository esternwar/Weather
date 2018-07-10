import React,{Component} from 'react';
import Context from '../context';


class City extends Component {

    constructor(){
        super();
        this.state = {visible: true};
        this.Visible = this.Visible.bind(this);
    }


    Visible(){
        this.setState({visible: false})
    }

render(){
    if(this.state.visible){
    return(
    <div>
    <Context.Consumer>
        {context => (<h1>{context[this.props.id].name} {context[this.props.id].temperature}&#176;C <h2><input class = "delbtm" type="submit" value="del" onClick={this.Visible}/></h2></h1>)}
    </Context.Consumer>
    </div>
        )}
    else{
        return(<div></div>)
    }
    }

}
export default City;

