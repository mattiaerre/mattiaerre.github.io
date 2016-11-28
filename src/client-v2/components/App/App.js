import React from 'react'; // eslint-disable-line
import EventEmitter from 'wolfy87-eventemitter';
import { version } from '../../../../package.json';
import Actions from '../Actions/Actions'; // eslint-disable-line
import Welcome from '../Welcome/Welcome'; // eslint-disable-line
import lockFactory from '../../helpers/lock-factory';
import actionsFactory from '../../helpers/actions-factory';

const eventEmitter = new EventEmitter();

// info: not sure if it is correct to bootstrap the actions here
const lock = lockFactory('YxmJEseG6u9Bl8ONjGkTicUPrryqDVY1', 'mattiaerre.auth0.com', eventEmitter);
const actions = actionsFactory(lock);

const App = () => (
  <div className={`fukol ${version}`}>
    <Welcome nickname="John Doe" eventEmitter={eventEmitter} />
    <Actions actions={actions} eventEmitter={eventEmitter} />
  </div>
);

export default App;
