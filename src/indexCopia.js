import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import hackerNewsApi from "./services/hackerNewsApi";
import * as serviceWorker from './serviceWorker';

import './i18n';

//hackerNewsApi.getTopStoryIds().then(ids => console.log(ids));

const renderApp = () => {
  ReactDOM.render(
      <React.StrictMode>
        <Suspense fallback={<div>Loading ...</div>}>
          <App />
        </Suspense>
      </React.StrictMode>,
  document.getElementById('root')
  );
};

renderApp();


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
