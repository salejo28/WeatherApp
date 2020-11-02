import React from 'react'

import Card from './components/Card'

import './App.css'

const App = () => {
    console.log(process.env.REACT_APP_API_KEY)
    return(
        <div className="container">
            <Card />
        </div>
    )
}

export default App;
