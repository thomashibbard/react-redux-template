
import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/skeleton-css/css/skeleton.css';

import { AppContainer } from 'react-hot-loader';

import App from './App';




const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
    	<App />
    </AppContainer>,
    document.getElementById('root')
  );
};

render(App);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./App', () => {
    render(App)
  });
}
// if (module.hot) {
//   module.hot.accept('./Content', () => {
//     render(Content)
//   });
// }
// if (module.hot) {
//   module.hot.accept('./AudienceList', () => {
//     render(AudienceList)
//   });
// }
