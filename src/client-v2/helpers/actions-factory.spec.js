import chai from 'chai';
import sinon from 'sinon';
import actionsFactory from './actions-factory';

chai.should();

describe('actionsFactory', () => {
  describe('when executed', () => {
    const lock = { show: sinon.spy(), logout: sinon.spy() };
    const actions = actionsFactory(lock);

    it('should be instanceof "Object"', () => {
      actions.should.be.instanceof(Object);
    });

    it('should have property "login"', () => {
      actions.should.have.property('login');
    });

    it('when "login" then called once "lock.show"', () => {
      actions.login();
      sinon.assert.calledOnce(lock.show);
    });

    it('should have property "logout"', () => {
      actions.should.have.property('logout');
    });

    it('when "logout" then called once "lock.logout"', () => {
      actions.logout();
      sinon.assert.calledOnce(lock.logout);
    });
  });
});
