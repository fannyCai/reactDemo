import React from 'react';
import ReactDOM from 'react-dom';
import './SearchBar.scss';
class Product extends React.Component{
	constructor(props) {
		super(props);
		this.ProductClick = this.ProductClick.bind(this);
	}
	ProductClick(event) {
		this.props.onProductClick(event.target.innerHTML);
		console.info(event.target.innerHTML);
	}
	render(){
		return  (
			<li onClick ={this.ProductClick}>{ this.props.name}</li>
		);
	}
}

class CreateProduct extends React.Component{
	constructor(props) {
		super(props);
	}
	render(){
		const LiList = [];
		const productEvent = this.props.clickProduct;
		this.props.products.forEach(function(item){
			if(item.isShow){
				LiList.push(<Product key={item.qre} name={item.key} onProductClick={productEvent}/>)
			}
		})
		if(!LiList.length){
			LiList.push(<Product key={"000"}  name={"暂无结果"} onProductClick={productEvent}/>)
		}
		return(
			<ul className="dropdown-menu">{LiList}</ul>
		)
	}
}

class SearchBar extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			value: '',
			wrapClass:'dropdown',
			
			focus:false
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleChangeList = this.handleChangeList.bind(this);

		this.inputOnFocus = this.inputOnFocus.bind(this);
		this.inputOnBlur = this.inputOnBlur.bind(this);
	}

  	handleChange(event) {
		this.setState(
		{
			value: event.target.value,
			wrapClass:'dropdown dropdown-active',
			focus: false
		
		})
	}
	
	handleChangeList(val){
		console.info(val);
		this.setState(
		{
			value: val,
			wrapClass:'dropdown',
			
		})
		
	}

	inputOnFocus(){
		this.setState({
			wrapClass:'dropdown dropdown-active', 
			focus: true 
		});
	}
	 
	//input 失去焦点
	inputOnBlur(){
		this.setState({
			
			focus: false
		 });
	}
	render(){
		const productsData = [];
		const val = this.state.value;
		this.props.products.forEach(function(item){
			if(item.key.indexOf(val)!=-1){
				item.isShow = true;
			}
			else{
				item.isShow = false;
			}
			productsData.push(item);

		})
		return (
			<div className={this.state.wrapClass}>
				<input className="itxt" value={this.state.value} onChange={this.handleChange} onBlur={this.inputOnBlur } onFocus={this.inputOnFocus } placeholder="6s"/>
				
				<CreateProduct products={productsData} clickProduct={this.handleChangeList}  />
			</div>
		);
	}
}

var DATALIST = [{"key":"6s","qre":220},{"key":"6s plus","qre":87},{"key":"6s手机壳","qre":694265},{"key":"64g u盘","qre":7505},{"key":"6x","qre":855426},{"key":"6s plus手机壳","qre":689010},{"key":"65寸液晶电视","qre":2128},{"key":"6d","qre":80668},{"key":"6plus","qre":699685},{"key":"3-6","qre":698193}]

ReactDOM.render(
	<SearchBar products={DATALIST}/>,
	document.getElementById('root')
)