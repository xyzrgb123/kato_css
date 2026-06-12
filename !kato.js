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

// спойлер
$('.spoiler').next().slideUp();
$('.spoiler').on("click", function() {
	$(this).toggleClass('active');
	$(this).next().slideToggle()
});

// модальное окно
// открыть
document.querySelectorAll('[mw]').forEach(el => {
el.addEventListener('click', () => {
var bg = document.getElementById("mw_bg");
var win = document.getElementById(el.getAttribute("mw"));
bg.classList.add("active");
win.classList.add("active");
})
});
// закрыть
document.querySelectorAll('.mw_close').forEach(el => {
el.addEventListener('click', () => {
	var bg = document.getElementById("mw_bg");
	bg.querySelector(".active").classList.remove("active");
	bg.classList.remove("active")

})
});