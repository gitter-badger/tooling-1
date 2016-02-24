if (process.env.NODE_ENV === 'development') {
  if (module.hot) {
    module.hot.accept();
  }

  require('raw!./index.html');
}
