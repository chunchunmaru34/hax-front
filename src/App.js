import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';
import rootSaga from './sagas';
import NewsFeedContainer from './components/news-feed/news-feed.container';
import PageSummaryContainer from './components/page-summary/page-summary.container';

import './App.css';

const sagaMiddleware = createSagaMiddleware({});

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))
sagaMiddleware.run(rootSaga);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
        <div className="App">
        <header className="App-header">
          <h1 className="App-title">Hax</h1>
        </header>
        <main>
          <Switch>
            <Route path='/stories/:id' component={PageSummaryContainer}/>
            <Route path='/' component={NewsFeedContainer}/>
          </Switch>
        </main>
      </div>
      </Router>
    </Provider>
    );
  }
}

export default App;
