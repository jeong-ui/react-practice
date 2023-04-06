const React = require('react');
const { Component } = React;

class WordRelay extends Component{
    state = {
        text : 'Hello, world and webpack',
    };

    render(){
        return <h1>Hi {this.state.text}</h1>
    }
}

module.exports = WordRelay;