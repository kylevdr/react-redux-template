import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import rootReducer from './reducers/index';
import ComponentTemplate from './components/ComponentTemplate';

const store = createStore(rootReducer);

class App extends React.Component {
    render() {
        return (
            // Routing goes here
            <ComponentTemplate></ComponentTemplate>
        );
    }
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);