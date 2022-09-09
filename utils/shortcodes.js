const button = (name, url) => {
  return `<a class="button" href=${url}>${name}</a>`;
};

module.exports = {
  button,
};