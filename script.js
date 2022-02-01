const toggle = document.querySelector('.toggle');
const links = document.querySelector('.links');

toggle.addEventListener('click', ()=>{ links.classList.toggle('show-links'); setInterval(1000)});