import React, { PropTypes } from 'react'; // eslint-disable-line
import { version } from '../../../package.json';

const Container = ({ children }) => { // eslint-disable-line
  return (
    <div className={`fukol ${version}`}>
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.element
};

export default Container;
