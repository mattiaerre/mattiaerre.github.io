import React from 'react'; // eslint-disable-line
import * as eventNames from '../../constants/event-names';

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    const { nickname, eventEmitter } = props;
    this.eventEmitter = eventEmitter;

    this.state = {
      nickname,
      userIsLoggedIn: false
    };
  }

  componentDidMount() {
    this.eventEmitter.on(eventNames.IS_LOGGED_IN_SENT, (isLoggedIn) => {
      if (isLoggedIn) {
        this.eventEmitter.emit(eventNames.USER_INFO_REQUESTED);
      }
    });

    this.eventEmitter.on(eventNames.AUTH_RESULT_PERSISTED, () => {
      this.eventEmitter.emit(eventNames.USER_INFO_REQUESTED);
    });

    this.eventEmitter.on(eventNames.PROFILE_SENT, (profile) => {
      this.setState({ nickname: profile.nickname, userIsLoggedIn: profile.userIsLoggedIn });
    });

    this.eventEmitter.on(eventNames.AUTH_RESULT_DELETED, () => {
      this.eventEmitter.emit(eventNames.USER_INFO_REQUESTED);
    });

    this.eventEmitter.emit(eventNames.USER_IS_LOGGED_IN_REQUESTED);
  }

  render() {
    const message = this.state.userIsLoggedIn ?
      `Hello ${this.state.nickname}, welcome back!` :
      `Hi ${this.state.nickname}, is that you?`;
    return (<span>{message}</span>);
  }
}

export default Welcome;
