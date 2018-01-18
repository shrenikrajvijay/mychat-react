import React, {Component} from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import Home from './Home'
import Chat from './Chat'
import styles from './App.css'


class App extends Component {


    render() {
        return(
            <Router history={browserHistory}>
                    <Route path="/" component={Home} />
                    <Route path="/chat" component={Chat} />
                    <Route path="*" component={Home} />
            </Router>
        );
    }
}

export default App;
