import React from 'react';
import ReactDOM from 'react-dom';

// function tick() {
//   const element = (
//     <div>
//       <h1>您好</h1>
//       <h2>现在是 {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(
//     element,
//     document.getElementById('root')
//   );
// }

// setInterval(tick, 1000);

// class Welcome extends React.Component{
// 	render() {
// 		return <h1>{this.props.name}</h1>

// 	}
// }
// function Welcome(props) {
//   return <h1>Hello, {props.age}</h1>;
// }

// const element = <Welcome age="12" />;
// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );
// function Clock(props) {
//   return (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {props.date.toLocaleTimeString()}.</h2>
//     </div>
//   );
// }

// function tick() {
//   ReactDOM.render(
//     <Clock date={new Date()} />,
//     document.getElementById('root')
//   );
// }

// setInterval(tick, 1000);


//2-2
// function Clock(props) {
// 	return (
// 		<div>{props.data.toLocaleTimeString()}</div>
// 	)
// }
// function tick() {
// 	ReactDOM.render(
// 		<Clock data = {new Date()}/>,
// 		document.getElementById('root')

// 	)
// }

// setInterval(tick,1000);
// var Greeting = React.createClass({
//   render: function() {
//     return <h1>Hello, {this.props.name}</h1>;
//   }
// });

// class Greeting extends React.Component {
//   render() {
//     return <h1>Hello, {this.props.name}</h1>;
//   }
// }

// function FormattedDate(props) {
//   return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
// }
// class Clock extends React.Component{
	
// 	constructor(props){
// 		super(props);
// 		this.state = {date: new Date()};
// 	}
// 	componentDidMount(){
// 		//this.timerID = setInterval(() => this.tick(),1000)
// 		var self = this;
// 		this.timerID = setInterval(function(){
// 			self.tick()
// 		}, 1000)
// 	}
// 	componentWillUnmount(){
// 		clearInterval(this.timerID)
// 	}
// 	tick() {
// 		this.setState({
// 			date: new Date()
// 		})
// 	}
// 	render() {
// 		return (
// 			<div>
// 				<h1>Hello, world!</h1>
// 				<FormattedDate date={this.state.date} />
// 			</div>
// 		)
// 	}
// }
// function App() {
// 	return (
// 		<div>
// 			<Clock/>
// 			<Clock/>
// 			<Clock/>
// 			<Clock/>
// 			<Clock/>
// 			<Clock/>
// 		</div>
// 	)
// }
// ReactDOM.render(
// 	<App />,
// 	document.getElementById('root')
// )

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
);
