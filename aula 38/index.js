const paragrafo = document.querySelector('.paragrafos');
const paragrafos = document.querySelectorAll('p');

const styloBody = getComputedStyle(document.body);
const backgroundColorBody = styloBody.backgroundColor;

for (let ps of paragrafos){
   ps.style.backgroundColor = backgroundColorBody;
   ps.style.color = 'white';
}

