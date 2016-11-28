const actionsFactory = (lock) => {
  const login = () => {
    lock.show();
  };

  const logout = () => {
    lock.logout();
  };

  return {
    login,
    logout
  };
};

export default actionsFactory;
