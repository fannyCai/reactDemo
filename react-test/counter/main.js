import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component{
	constructor(props) {
		super(props);
		this.buttonClick = this.buttonClick.bind(this);
	}
	buttonClick(event) {

		this.props.onNumberClick(event.target.innerHTML);
	}
	render(){
		return(
			<li onClick = {this.buttonClick}>{this.props.number}</li>
		)
	}
}
class CreateButton extends React.Component{
	constructor(props) {
		super(props);
	}
	render(){
		let liArry = ['÷','×','-','+','7','8','9','%','4','5','6','±','1','2','3','←','0','.','=','C'];
		const liList = liArry.map((number) =>
			<Button key={number} number={number} onNumberClick={this.props.clickButton} />
		);
		return(
			<ul>{liList}</ul>
		)
	}

}

class Calculator extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			show:0,
			value: 0,
			temp : 0,
			num1:0,
			per:'',
			hasOperator: false,
			NeedClear:false
		}
		this.handleNumberClick = this.handleNumberClick.bind(this);
	}
	operate(iNum1, iNum2, sOpr){
		console.info(iNum1,iNum2,sOpr);
		var iResult = 0;
		switch(sOpr){
			case '×':
				iResult=iNum1*iNum2;
				break;
			case '+':
				iResult=iNum1+iNum2;
				break;
			case '-':
				iResult=iNum1-iNum2;
				break;
			case '÷':
				if(iNum2){
					iResult=iNum1/iNum2;
				} else{
					iResult = '除数不能为0';
				}
				break;
			default:
				iResult=iNum2;	
		}
		return iResult;
	 }

	handleNumberClick(n) {
		switch(n.toString()){
			case '=':
				let result = this.operate(parseFloat(this.state.num1), parseFloat(this.state.value), this.state.per)
				this.setState({
					show:result,
					temp : result,
					value : 0,
					num1:result,
					NeedClear:true
				});
				break;
			case '+':
			case '-':
			case '×':
			case '÷':
				
				if(this.state.num1.length!=0)
				{
					 let result = this.operate(parseFloat(this.state.num1), parseFloat(this.state.value), n);
				}
				
				this.setState({
					num1: this.state.temp,
					value:0,
					per:n,
					hasOperator: true,
					NeedClear:true
				});

				break;
			case '±':
				if (this.state.value) return;
				this.setState({
					show:0,
					value: 0,
					temp : 0,
					
				});
				break;
			case '%':
				this.setState({
					show:0,
					value: 0,
					temp : 0,
					num1:0,
					per:'',
					hasOperator: false,
					NeedClear:false
				});
				break;	
			case '←':
				this.setState({
					show:0,
					value: 0,
					temp : 0,
					num1:0,
					per:'',
					hasOperator: false,
					NeedClear:false
				});
				break;		
			case 'C':
				this.setState({
					show:0,
					value: 0,
					temp : 0,
					num1:0,
					per:'',
					hasOperator: false,
					NeedClear:false
				});
				break;
			default:
				let val;
				if (n == '.'){
					if((this.state.value).toString().indexOf('.') ==-1){

						val = this.state.value ? this.state.value.toString()+n: '0'+n;
					} else{
						val = this.state.value.toString();
					}
					
				} else{
					
					val = this.state.value&&this.state.value!='0'? this.state.value.toString()+n :n;
				}
				if(this.state.NeedClear){
					this.setState({
						show:val,
						value:val,
						NeedClear:false,
						temp:val
					})
				} else{
					this.setState({
						show:val,
						value:val,
						temp:val

					})
				}			
		}
		
	}

	render() {
		return (
			<div className="wrap">
				<input type="text" className="itxt" value={this.state.show} />
				<CreateButton clickButton={this.handleNumberClick} />
			</div>

		)
	}
}

ReactDOM.render(
  <Calculator />,
  document.getElementById('root')
);