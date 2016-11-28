import React from 'react'; // eslint-disable-line
import { shallow } from 'enzyme';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import App from './App'; // eslint-disable-line

chai.should();
chai.use(chaiEnzyme());

describe('<App />', () => {
  describe('when rendered', () => {
    const props = {};
    const wrapper = shallow(<App {...props}/>);

    it('should have tag name "div"', () => {
      wrapper.should.have.tagName('div');
    });

    it('should have class name "fukol"', () => {
      wrapper.should.have.className('fukol');
    });
  });
});
