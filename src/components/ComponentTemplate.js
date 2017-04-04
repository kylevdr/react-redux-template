import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

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
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ComponentTemplate);