let con = 0;
const counter = document.getElementById('counter');
counter.innerHTML = con;

function increment() {
  con = con + 1;
  counter.innerHTML = con;
}
function decrement() {
  con = con - 1;
  counter.innerHTML = con;
}

document.getElementById('changeText').addEventListener('click', function () {
  document.getElementById('change').textContent = 'Hello IN JS';
});


  document
  .getElementById('highlightFirstCity')
  .addEventListener('click', function () {
    document
      .getElementById('citiesList')  
      .firstElementChild.classList.add('highlight'); 
  });

