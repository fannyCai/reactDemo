import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
var nameList = ['A', 'B', 'C'];
ReactDOM.render(
<div>	
 {
 	nameList.map(function(name){
 		return <div>您好，{name}</div>;
 	})
 }
 </div>,
  document.getElementById('root')
);

