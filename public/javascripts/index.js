((pegasus) => {
  // https://sad-balcony.herokuapp.com/converter/arabic2roman/2016

  // ```bash
  // wt edit
  // ```
  const request = pegasus('https://wt-mattia-richetto-gmail-com-0.run.webtask.io/arabic2roman?webtask_no_cache=1&arabic=2016');
  request.then(
    (data, xhr) => {
      document.getElementById('main-title').innerHTML = data.roman;
    },
    (data, xhr) => {
      console.error(data, xhr.status);
    });
})(window.pegasus);
