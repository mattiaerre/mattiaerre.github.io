import React from 'react'; // eslint-disable-line
import BinaryClock from 'react-binary-clock'; // eslint-disable-line

const Home = () => { // eslint-disable-line
  return (
    <div className="fukol-grid">
      <div className="binary-clock-container">
        <BinaryClock />
      </div>
      <div className="textarea-container">
        <textarea rows="25"></textarea>
      </div>
    </div>
  );
};

export default Home;
