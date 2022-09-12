console.log(`I was loaded at ${Date(Date.now()).toString()}`);

if (window.location.search) {
  const parts = window.location.href.split('?');
  const query = parts[1];
  const params = query.split('&');
  for (const i in params) {
    let param = params[i];
    const pair = param.split('=');
    if (pair[0] === 'dm') {
      localStorage.setItem('dm-admin', pair[1]);
      window.location.href = 'https://carver-sphere.just-us.net/dm';
    }
  }
}

if (window.location.href.includes('/dm') && localStorage.getItem('dm-admin') !== 'true') {
  window.location.href = 'https://carver-sphere.just-us.net/404.html';
}
