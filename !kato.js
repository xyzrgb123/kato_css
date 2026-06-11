// добавление класса active кликнутому элементу

document.querySelectorAll('.group.clickable:not(.oo)>*').forEach(el => {
  if (!el.hasAttribute('disabled')) {
    el.addEventListener('click', () => {
      el.classList.toggle('active');
    });
  }
});

// снять класс active с сестренского элемента и добавить кликнутому
document.querySelectorAll('.group.clickable.oo>*').forEach(el => {
  if (!el.hasAttribute('disabled')) {
    el.addEventListener('click', () => {
      const active_bro = el.parentElement.querySelector('.active');
      if (active_bro) {active_bro.classList.remove('active')};
      el.classList.add('active');
    });
  }
});



