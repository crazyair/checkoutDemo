import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import '../styles/app.less';
import {WingBlank} from 'antd-mobile';
class App extends Component {
    render() {
        const {children} = this.props;
        return (
            <WingBlank size="sm">
                {children}
            </WingBlank>
        )
    }
}
App = withRouter(App);
const mapStateToProps = (state, ownProps) => ({
    user: state.user,
});

export default connect(mapStateToProps, {

})(App)
