import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import RouterComponent from './Router/RouterComponent';
import HomeComponent from './components/HomeComponent';
import ProfileComponent from './components/ProfileComponent';
import WishlistComponent from './components/WishlistComponent';
import LatestComponent from './components/LatestComponent';
import ExploreComponent from './components/ExploreComponent';

import registerServiceWorker from './registerServiceWorker';

class App extends Component {
    render() {
        return (
            <Router>
                <RouterComponent>
                    <Switch>
                        <Route exact path="/" component={HomeComponent}/>
                        <Route exact path="/home" component={HomeComponent}/>
                        <Route exact path="/explore/featured" component={ExploreComponent}/>
                        <Route path="/games/2018/latest" component={LatestComponent}/>
                        <Route path="/profile/view" component={ProfileComponent}/>
                        <Route path="/wishlist/offers" component={WishlistComponent}/>
                    </Switch>
                </RouterComponent>
            </Router>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
