import React, { Component } from 'react';
import { connect, Provider } from "react-redux";
import { HashRouter, Route, Switch } from 'react-router-dom';
import { alertActions } from './actions';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

const TheLayout = React.lazy(() => import('./containers/TheLayout'));

class App extends Component {

  componentDidMount() {
    const { dispatch } = this.props;
    this.props.history.listen((location, action) => {
      dispatch(alertActions.clear());
    });
  }

  componentDidUpdate(prevProps) {}

  render() {
    const { store } = this.props;
    return (
      <Provider store={store}>
        <HashRouter>
            <React.Suspense fallback={loading}>
              <Switch>
                <Route path="/" name="Home" render={props => <TheLayout {...props}/>} />
              </Switch>
            </React.Suspense>
        </HashRouter>
      </Provider>
    );
  }
}

const mapStateToProps = state => ({})

export default connect(mapStateToProps)(App);
