import React from 'react'; // eslint-disable-line
import BinaryClock from 'react-binary-clock'; // eslint-disable-line
import * as eventNames from '../../constants/event-names';
import '../Common/Common.css';

class Body extends React.Component {
  constructor(props) {
    super(props);
    const { eventEmitter } = props;
    this.eventEmitter = eventEmitter;

    this.state = {
      userIsLoggedIn: false
    };
  }

  componentDidMount() {
    this.eventEmitter.on(eventNames.PROFILE_SENT, (profile) => {
      this.setState({ userIsLoggedIn: profile.userIsLoggedIn });
    });
  }

  render() {
    return (
      <div className={`fukol-grid ${this.state.userIsLoggedIn ? '' : 'hide'}`}>
        <div className="binary-clock-container">
          <BinaryClock />
        </div>
        <div className="textarea-container">
          <textarea rows="25"></textarea>
        </div>
      </div>
    );
  }
}

export default Body;
