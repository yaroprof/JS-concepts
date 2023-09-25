const list = document.getElementById('myList')
list.addEventListener('click', function (event) {
  if (event.target.tagName === 'LI') {
    console.log('Event: ', event.target.textContent);
  }
})