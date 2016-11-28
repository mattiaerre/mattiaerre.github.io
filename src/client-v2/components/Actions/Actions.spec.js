import React from 'react'; // eslint-disable-line
import { shallow } from 'enzyme';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import sinon from 'sinon';
import Actions from './Actions'; // eslint-disable-line

chai.should();
chai.use(chaiEnzyme());

describe('<Actions />', () => {
  describe('when rendered', () => {
    const props = {
      actions: {
        login: sinon.spy(),
        logout: sinon.spy()
      }
    };
    const wrapper = shallow(<Actions {...props} />);

    it('should have tag name "div"', () => {
      wrapper.should.have.tagName('div');
    });

    it('should have descendants "a"', () => {
      wrapper.should.have.descendants('a');
    });

    it('when "click" ".login" then called once "login"', () => {
      wrapper.find('.login').simulate('click');
      sinon.assert.calledOnce(props.actions.login);
    });

    it('when "click" ".logout" then called once "logout"', () => {
      wrapper.find('.logout').simulate('click');
      sinon.assert.calledOnce(props.actions.logout);
    });
  });
});
