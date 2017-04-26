var React = require('react');
var ReactDOM = require('react-dom');
function Button(props) {
 
  return (
    <ul>{listItems}</ul>
  );
}

class Count extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {result: 0};
	    this.handleClick = this.handleClick.bind(this);
	    this.parser = this.parser.bind(this);
	    this.operate = this.operate.bind(this);
	   
	    this.state = {
	      result: '0',
	      keyboard: [
	        {letter: '7'},
	        {letter: '8'},
	        {letter: '9'},
	        {letter: '+'},
	        {letter: '4'},
	        {letter: '5'},
	        {letter: '6'},
	        {letter: '-'},
	        {letter: '1'},
	        {letter: '2'},
	        {letter: '3'},
	        {letter: '×'},
	        {letter: '0'},
	        {letter: 'C'},
	        {letter: '='},
	        {letter: '÷'}
	      ]
	    };
	    this.result = 0;
	    this.iNum1 = 0;
	    this.iNum2 = 0;
	    this.stack = [];
	    this.temp = [];
	    this.operation = null;
	    this.bNeedClear = false;
	    this.str ='0';
	    this.flag = false;

  }
  operate(iNum1, iNum2, sOpr){
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
			iResult=iNum1/iNum2;
			break;
		default:
			iResult=iNum2;
  	}
  	return iResult;
  }
 
  parser(char){
  	switch(char.toString()){
  		case '=':

  			this.result = this.operate(this.iNum1,this.iNum2,this.operation);
  			this.iNum1 = this.result;
  			this.stack = [];
  			this.stack.push(this.result);
  			this.bNeedClear = true;
  			break;
  		case '+':
		case '-':
		case '×':
		case '÷':
			if(this.operation){
				this.result = this.operate(this.iNum1,this.iNum2,this.operation);
				this.iNum1 = this.result;
				this.stack = [];
				this.operation = char;
  				this.stack.push(this.result);
  				this.stack.push(this.operation);
  				this.bNeedClear = true;
  				
  			} else{
  				this.flag = true;
				this.temp = [];
				this.operation = char;

				this.stack.push(this.operation);
				
  			}

			
		
			break;
		case 'C':
			this.bNeedClear = false;
			this.stack = [];
			this.temp = [];
			this.flag = false;
			this.iNum1 = 0;
			this.iNum2 = 0;
			this.result = 0;
			
			this.operation = null;
			break;
		default:
			if(char == 0){

			}
			if(this.bNeedClear){
				this.stack = [];
				this.temp = [];
				this.iNum1 = this.result;
				this.stack.push(char);
				this.temp.push(char);
				this.iNum2 = parseInt(this.temp.join(''));
				this.bNeedClear = false;

			} else {
				this.stack.push(char);
				this.temp.push(char);
				if(this.flag){
					this.iNum2 = parseInt(this.temp.join(''));
				} else{
					this.iNum1 = parseInt(this.temp.join(''));
				}

				this.result = this.iNum1;
			}			
  	}
  	return this.stack.join('');

  }
  handleClick(e) {
  	e.preventDefault();
  	const input = e.target.innerHTML
  	this.setState({result:this.parser(input)});

    
  }

  render() {
	  const listItems = this.state.keyboard.map((number) =>
	    <li key={number.letter.toString()} onClick={this.handleClick} >
	      {number.letter}
	    </li>
	  );
    return (
    	<div >
    		<div className="screen">{this.state.result}</div>
    		<ul>{listItems}</ul>
    	</div>
      
    );
  }
}

ReactDOM.render(
  <Count/>,
  document.getElementById('caculator-container')
)
