let data = [
  {
    name: 'Bob',
    age: '30'
  },
  {
    name: 'Joe',
    age: '32'
  },
  {
    name: 'Jake',
    age: '20'
  },
  {
    name: 'Timothy',
    age: '27'
  },
  {
    name: 'greg',
    age: '22'
  },
  {
    name: 'Joey',
    age: '34'
  }
];

const info = document.querySelector('#info');

let details = data.map(function(item) {
  return '<div>' + item.name + ' ' + 'is ' + item.age + ' years old' + '</div>';
});

info.innerHTML = details.join('\n');
