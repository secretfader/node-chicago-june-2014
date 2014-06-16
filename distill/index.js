var distill = require('distill')
,   util    = require('util')
,   data    = [];

for (var i = 0; i < 20; i++) {
  data.push({
    id: i,
    title: 'Hello Node Chicago!',
    text: 'Lorem ipsum does arnet...',
    _image: 'http://placekitten.com/200/300',
    owner: [{
      id: 15,
      name: 'Nicholas Young',
      email: 'contact@machine.fm'
    }]
  });
}

var output = distill(data)
  .field('id')
  .field('title')
  .field('img', '_image')
  .embed('owner', 'id')
  .bottle();

console.log(util.inspect(output[0]));
