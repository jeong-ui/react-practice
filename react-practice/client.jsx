const React = require('react');
const ReactDOM = require('react-dom');

const Gugudan = require('./src/practice/gugudan/Gugudan')
const WordRelay = require('./src/practice/wordRelay/WordRelay')

ReactDOM.render(<Gugudan/>  , document.querySelector('#gugudan'));
ReactDOM.render(<WordRelay/>, document.querySelector('#wordRelay'));