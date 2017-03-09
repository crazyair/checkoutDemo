import React from 'react'
import {Route, Router, IndexRoute, IndexRedirect, browserHistory, Link} from 'react-router'
import App from './containers/App'

class NoLogin extends React.Component {
    render() {
        return (
            <div>
                <p style={{textAlign: 'center'}}><Link to="/">点击此处返回首页</Link></p>
            </div>
        )
    }
}
import Invoice from './containers/invoice'


export default (store) => (

    <Route path="/"  component={App}>
        <IndexRedirect to="invoice"/>
        <Route path="invoice" component={Invoice}/>
        <Route path="noLogin" component={NoLogin}/>
    </Route>

);

//
// <IndexRedirect to="/app"/>
// <Route path="/app" component={App} onEnter={checkAuth(store)}>
//     <Route path="/app/login" component={Login}/>
//     </Route>