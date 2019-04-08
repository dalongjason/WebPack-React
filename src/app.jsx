import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Index from './Views/index.jsx';

// ReactDOM.render(<Index/>, document.getElementById("root"));
ReactDOM.hydrate(<Index/>, document.getElementById("root"));


