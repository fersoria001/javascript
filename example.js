const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';
container.appendChild(content);

const paragraph = document.createElement('p');
paragraph.textContent = "Hey I'm red!";
paragraph.style.color = 'red';
container.appendChild(paragraph);

const hthree = document.createElement('h3');
hthree.textContent= "I'm a blue h3!";
hthree.style.color = 'blue';
container.appendChild(hthree);

const blackdiv = document.createElement('div');
blackdiv.style.backgroundColor = 'pink';
blackdiv.style.borderColor = 'black';
const another = document.createElement('h1');
another.textContent = "I'm on a div";
const metoo = document.createElement('p');
metoo.textContent = "ME TOO!";
blackdiv.appendChild(another);
blackdiv.appendChild(metoo);
container.appendChild(blackdiv);

const btn = document.querySelector('#btn');
btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });
