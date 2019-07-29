const sayHello = (req, res) => res.send('Hello rideshares! 🚘');

export default {
  public: router => {
    router.get('/hello', sayHello);
  },
  private: router => {}
};
