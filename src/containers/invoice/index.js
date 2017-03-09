import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {withRouter} from 'react-router'
import * as actions from '../../actions/invoice';
import InvoiceCom from '../../components/invoice';
import './index.less';
class Invoice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true
        };
    }

    render() {
        return (
            <div >
                <InvoiceCom {...this.props}/>
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        user: state.user,
    }
};

function mapDispatchToProps(dispatch) {
    return {actions: bindActionCreators(actions, dispatch)};
}
Invoice = withRouter(Invoice);
export default connect(mapStateToProps, mapDispatchToProps)(Invoice)