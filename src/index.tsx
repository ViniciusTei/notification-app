import * as React from 'react';
import { render } from 'react-dom';
import { GlobalStyle } from './styles/globalStyles';

render(
  <React.StrictMode>
    <GlobalStyle/>
    <div>Hello World</div>
  </React.StrictMode>,
  document.getElementById('root')
);