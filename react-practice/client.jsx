//import Index from './src/practice/NumberBaseBall/NumberBaseBall';
//import Index from './src/practice/NumberBaseBall/NumberBaseBall_class';
//import Index from './src/practice/ResponseCheck/ResponseCheck';
import Index from './src/practice/RSP/RSP_class';

const React = require('react');
//const ReactDOM = require('react-dom');

//React 18
const ReactDOM = require('react-dom/client');

//const Gugudan = require('./src/practice/gugudan/Gugudan')
//const WordRelay = require('./src/practice/wordRelay/WordRelay')

//const Indexaa = require('./src/practice/NumberBaseBall/NumberBaseBall');

//ReactDOM.render(<Gugudan/>  , document.querySelector('#gugudan'));
//ReactDOM.render(<WordRelay/>, document.querySelector('#root'));


ReactDOM.createRoot(document.querySelector('#root')).render(

    //<React.StrictMode>
        <Index/>
    //</React.StrictMode>
);