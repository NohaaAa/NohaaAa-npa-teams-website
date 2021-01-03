import Home from './components/home';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import reducers from './reducers';
import 'aos/dist/aos.css';

import TopNavbar from './components/top-navbar/top-navbar';
import Footer from './components/footer/footer';
import Teams from './components/teams/teams';
import Team from './components/team/team';


const createStoreWithMW = applyMiddleware(promiseMiddleware)(createStore);

function App() {
  return (
    <Provider store={createStoreWithMW(reducers)}>
      <BrowserRouter>
        <TopNavbar />
        <Switch>
          <Route path='/teams/:id' component={Team} />
          <Route path='/teams' component={Teams} />
          <Route exact path='/' component={Home} />
          <Route path="*" render={() => (
            <h1 className="error">
              404
            </h1>
          )} />
        </Switch>
        <Footer />

      </BrowserRouter>
    </Provider>

  );
}

export default App;
