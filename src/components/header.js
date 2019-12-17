import React, { Component} from 'react';
import '../css/styles.css'

class Header extends Component{

    state = {
        keywords: 'Helloe'
    }

    inputChangeHandler = (event) => {
        
        this.setState({
            keywords: event.target.value
        });
    }

    render(){
        console.log(this.state.keywords)
    return (        
            <header>
            <div className="logo">This is my Header</div>
            <input type='text' onChange={this.inputChangeHandler}/>
            </header>
            
        
    )
}
}

export default Header;