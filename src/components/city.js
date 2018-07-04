import React from 'react';
import Context from '../context';

export default (props) => (

    <Context.Consumer>
        {context => (<h1>{context[props.id].name} {context[props.id].temperature}&#176;C</h1>)}
    </Context.Consumer>
)

