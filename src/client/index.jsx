import React from 'react';
import { render } from 'react-dom';
import BinaryClock from 'react-binary-clock';

const App = () => (
  <div className="fukol">
    <div className="fukol-grid">
      <div className="binary-clock-container">
        <BinaryClock />
      </div>
      <div className="textarea-container">
        <textarea rows="25"></textarea>
      </div>
    </div>
  </div>
);

render(
  <App />, document.getElementById('app')
);
