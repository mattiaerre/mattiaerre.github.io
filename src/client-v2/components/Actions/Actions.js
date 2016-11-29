import React from 'react'; // eslint-disable-line
import * as eventNames from '../../constants/event-names';
import '../Common/Common.css';

class Actions extends React.Component {
  constructor(props) {
    super(props);
    const { actions, eventEmitter } = props;
    this.actions = actions;
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
      <div>
        <ul>
          <li className={`${this.state.userIsLoggedIn ? 'hide' : ''}`}>
            <a className="login" href="#" onClick={this.actions.login}>
              Login
            </a>
          </li>
          <li className={`${this.state.userIsLoggedIn ? '' : 'hide'}`}>
            <a className="logout" href="#" onClick={this.actions.logout}>
              Logout
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Actions;
