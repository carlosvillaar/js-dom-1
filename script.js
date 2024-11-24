const imgOn = document.querySelector('.on');
const imgOff = document.querySelector('.off');
const button = document.querySelector('.onoff');

button.addEventListener('click', () => {
  imgOn.classList.toggle('none')
  button.innerHTML = imgOn.classList.contains('none') ? 'Accendi la lampadina' : 'Spegni la lampadina'
})