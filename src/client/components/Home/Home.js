import React from 'react'; // eslint-disable-line
import BinaryClock from 'react-binary-clock'; // eslint-disable-line

class Home extends React.Component {
  constructor(props) {
    super(props);
    const { auth } = props.route;
    this.state = {
      auth,
      nickname: 'John Doe'
    };
  }

  componentDidMount() {
    this.state.auth.getUserInfo((error, profile) => {
      if (error) {
        console.log('error:', error); // eslint-disable-line
      } else {
        this.setState({ nickname: profile.nickname });
      }
    });
  }

  render() { // eslint-disable-line
    return (
      <div className="fukol-grid">
        <div className="binary-clock-container">
          <BinaryClock />
          <span>{`Hi ${this.state.nickname}, is that you?`}</span>
        </div>
        <div className="textarea-container">
          <textarea rows="25"></textarea>
        </div>
      </div>
    );
  }
}

export default Home;
