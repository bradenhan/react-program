import React from 'react';

class Demo2 extends React.Component {
	// 构造函数
	constructor(){
		super();
		this.state = {
			a : 100
		}; 
	};

	clickHander (){
		console.log('sss')
		this.setState({
			a : this.state.a + 1 
		});
	}
 
	render(){
		return (
			<div>
				{this.state.a} <br />
				<button  onClick={(this.clickHander).bind(this)}>点击</button>
			</div>
		)
	}
}

export default Demo2;