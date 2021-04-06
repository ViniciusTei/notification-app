import * as React from 'react';
import { render } from 'react-dom';
import serviceWorker from './serviceWorker';

//components #653390
import App from './App';

//styles
import { GlobalStyle } from './styles/globalStyles';

render(
  <React.StrictMode>
    <GlobalStyle/>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);


//register service worker
serviceWorker()