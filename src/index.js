import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import "antd/dist/antd.css";
//import { HashRouter as Router} from "react-router-dom";


// import CustomLinkExample from './containers/CustomLinkExample';
// ReactDOM.render(
//     <Router>
//         <CustomLinkExample />
//     </Router>,
//     document.getElementById('root')
// )


// import App from './App';
// ReactDOM.render(
//     <Router>
//         <App />
//     </Router>,
//     document.getElementById('root')
// )


// import AuthExample from './containers/AuthExample';
// ReactDOM.render(
//     <Router>
//         <AuthExample />
//     </Router>,
//     document.getElementById('root')
// )



import Counter from './Counter';
import TodoList from './TodoList';
ReactDOM.render(
    <div>
        <Counter/>
        <TodoList/>    
    </div>,
     document.getElementById('root')
)