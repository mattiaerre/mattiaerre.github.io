import React from 'react';
import { render } from 'react-dom';
import BinaryClock from 'react-binary-clock';

const App = () => (
  <div className="fukol">
    <div className="fukol-grid">
      <div>
        <BinaryClock />
      </div>
      <div>
        <textarea rows="25"></textarea>
      </div>
    </div>
  </div>
);

render(
  <App />, document.getElementById('app')
);
