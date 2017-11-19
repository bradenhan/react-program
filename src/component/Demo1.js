import React from 'react';

class Demo1 extends React.Component {
	haha (lanmu){
		if(lanmu === 'a'){
			return (
				<ul>
					<li> a</li>
				</ul>
			);
		}else if(lanmu === 'b'){
			return (
				<ul>
					<li> b</li>
				</ul>
			);
		}
		
	}
	render() {
		let xx = () => {
			return (
				<ul>
					<li> 'ssss'</li> 
				</ul>
			)
		}

		let array = ['a','b','c'].map((item,index) => {
			return <li key={index}>{item}</li>
		})

		return ( 
			<div className = "shopping-list">
				<h1> Shopping List for </h1>  
				<ul>
					<li> { 3 > 8 ? 'A' : 'B'} </li>
				</ul>
				
				 <br />
				<ul>
					<li>{xx()} </li>
				</ul>
				{this.haha('b')}  
				<br />
				
				<ul className="s">
					 {array}
				</ul>
			</div>
		);
	}
}

export default Demo1;