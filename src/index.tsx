import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import ingredients from './store/Ingredients'

ReactDOM.render(
    <App ingredients={ingredients}/>,
    document.getElementById('root')
)

