((pegasus) => {
  // https://sad-balcony.herokuapp.com/converter/arabic2roman/2016
  const request = pegasus('https://sad-balcony.herokuapp.com/converter/arabic2roman/2016');
  request.then(
    (data, xhr) => {
      document.getElementById('main-title').innerHTML = data.roman;
    },
    (data, xhr) => {
      console.error(data, xhr.status);
    });
})(window.pegasus);
