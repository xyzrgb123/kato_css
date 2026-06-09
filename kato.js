// добавление класса active кликнутому элементу

document.querySelectorAll('.toggle>*').forEach(el => {
  el.addEventListener('click', () => {
    el.classList.toggle('active');
  });
});

// снять класс active с сестренского элемента и добавить кликнутому
document.querySelectorAll('.toggle_oo>*').forEach(el => {
  el.addEventListener('click', () => {
    const active_bro = el.parentElement.querySelector('.active');
    if (active_bro) {active_bro.classList.remove('active')};
    el.classList.add('active');
  });
});



