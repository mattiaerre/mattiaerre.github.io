const featuresManagement = (setFeatures) => {
  // const feature = setFeatures(['hide-binary-clock', 'textbox-text-large']);
  const feature = setFeatures();

  if (feature.active('hide-binary-clock')) {
    document.getElementsByClassName('binary-clock-container')[0].style.display = 'none';
  }

  if (feature.active('textbox-text-large')) {
    document.getElementsByClassName('textarea-container')[0]
    .getElementsByTagName('textarea')[0].style.fontSize = 'large';
  }
};

const loadCurrentYear = (pegasus) => {
  // https://sad-balcony.herokuapp.com/converter/arabic2roman/2016
  // ```bash
  // wt edit
  // ```
  const request = pegasus('https://wt-mattia-richetto-gmail-com-0.run.webtask.io/arabic2roman?webtask_no_cache=1&arabic=2016');
  request.then(
    (data, xhr) => {
      document.getElementById('current-year').innerHTML = data.roman;
    },
    (data, xhr) => {
      console.error(data, xhr.status);
    });
};

((setFeatures, pegasus, oc) => {
  featuresManagement(setFeatures);
  loadCurrentYear(pegasus);
  oc.renderUnloadedComponents();
})(window.setFeatures, window.pegasus, window.oc);
