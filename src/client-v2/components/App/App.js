import React from 'react'; // eslint-disable-line
import EventEmitter from 'wolfy87-eventemitter';
import { version } from '../../../../package.json';
import lockFactory from '../../helpers/lock-factory';
import actionsFactory from '../../helpers/actions-factory';
import Welcome from '../Welcome/Welcome'; // eslint-disable-line
import Actions from '../Actions/Actions'; // eslint-disable-line
import Body from '../Body/Body'; // eslint-disable-line

const eventEmitter = new EventEmitter();

// info: not sure if it is correct to bootstrap the actions here
const lock = lockFactory('YxmJEseG6u9Bl8ONjGkTicUPrryqDVY1', 'mattiaerre.auth0.com', eventEmitter);
const actions = actionsFactory(lock);

const App = () => (
  <div className={`fukol ${version}`}>
    <Welcome nickname="John Doe" eventEmitter={eventEmitter} />
    <Actions actions={actions} eventEmitter={eventEmitter} />
    <Body eventEmitter={eventEmitter} />
  </div>
);

export default App;
