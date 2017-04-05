import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as exampleActions from '../actions/actionTemplate'

class ComponentTemplate extends React.Component {
    render() {
        return (
            <div>
                <h1>React-Redux App</h1>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        reducerTemplate: state.reducerTemplate
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(exampleActions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ComponentTemplate);