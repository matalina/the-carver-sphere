const button = (name, url) => {
  return `<a class="button" href=${url}>${name}</a>`;
};

const stat = (stat) => {
  const mod = Math.floor((parseInt(stat) - 10) / 2);
  const sign = mod >= 0 ? '+' : '';
  return `<div class="ability-score"><div class="stat">${stat}</div><div class="modifier">${sign}${mod}</div></div>`;
}

const describe = (details, background, faith) => {
  let block = '<div class="row">';
  block += '<div class="w-1/2"><h2>Description</h2>';
  for (let i in details.looks) {
    let look = details.looks[i];
    block += look + '<br/>';
  }
  block += '<br/><strong>Sexual Orientation:</strong> '
  block += details.orientation + '<br/>';
  block += '<strong>Relationship Status:</strong> '
  block += details.relationship + '<br/>';
  block += '</div>';
  block += '<div class="w-1/2"><h2>Personality Traits</h2>';
  block += `<p><strong>Background:</strong> ${background}</p>`;
  block += `<p><strong>Faith:</strong> ${faith}</p>`;
  for (let i in details.traits) {
    let trait = details.traits[i];
    block += trait + '<br/>';
  }
  block += '</div></div>';
  return block;
}

module.exports = {
  button,
  stat,
  describe
};