
document.addEventListener('DOMContentLoaded', function ()  {

  const list = document.querySelector('.menu');
const button = document.getElementById('toggleMenu');

  button.addEventListener('click', function () {

    list.classList.toggle('show');

  });
}); 