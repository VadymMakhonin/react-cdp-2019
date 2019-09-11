import React from 'react'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'

const Home = () => 'Home'   ;
const About = () => 'About';
const Topics = () => 'Topics';

export const BasicExample = () => (
    <Router>
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/topics">Topics</Link></li>
            </ul>

            <Route path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/topics" component={Topics}/>
        </div>
    </Router>
)
