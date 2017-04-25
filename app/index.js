// __webpack_public_path__ = "http://0.0.0.0:4000/";
import React from 'react';
import ReactDOM from 'react-dom';

import App from './component';
import { AppContainer } from 'react-hot-loader';

// document.body.appendChild(component());
// console.log('module.hot', module.hot);
// // HMR interface
// if (module.hot) {
//   // Capture hot update
//   module.hot.accept('./component', () => {
//     const nextComponent = component();
//     // Replace old content with the hot loaded one
//     document.body.replaceChild(nextComponent, demoComponent);
//     document.body.innerHTML = (nextComponent, demoComponent);
//     demoComponent = nextComponent;
//   });
// }
console.log(document.getElementById('root'));
const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <App/>
    </AppContainer>,
    document.getElementById('root')
  );
};

render(App);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./component', () => {
    render(App)
  });
}