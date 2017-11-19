import React from 'react';

class ShoppingList extends React.Component {
    
    render() {
        let arry = ['Instagram','WhatsApp','Oculus'].map((item,index) => {
            return <li key={index}>{item}</li> 
        });

        return (
            <div className="shopping-list">
                <h1>Shopping List for {this.props.name}</h1>
                <ul>
                     {arry}
                </ul>
            </div>
        );
    }
} 

export default ShoppingList;