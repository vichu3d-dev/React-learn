import React from 'react';
import ReactDom from 'react-dom';

//Components
import Header from './components/header'

const App = () => {
    return (
        <div className="base">
            <Header/>
    </div>
    )
}

ReactDom.render(<App/>,document.getElementById('root'));