import chai from 'chai';
import actionsFactory from './actions-factory';

chai.should();

describe('actionsFactory', () => {
  describe('when executed', () => {
    const actions = actionsFactory();

    it('should be instanceof "Object"', () => {
      actions.should.be.instanceof(Object);
    });

    it('should have property "login"', () => {
      actions.should.have.property('login');
    });

    it('should have property "logout"', () => {
      actions.should.have.property('logout');
    });
  });
});
