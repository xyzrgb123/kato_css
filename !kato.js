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
// // document.addEventListener('DOMContentLoaded', () => {
// window.addEventListener('load', function() {


// document.querySelectorAll('.spoiler').forEach(el => {
    
//     const height = el.nextElementSibling.clientHeight;
//     // alert(height)
//     el.nextElementSibling.style.setProperty('--spoiler', -height + 'px');
//     el.addEventListener('click', () => {
//       // const height = el.nextElementSibling.offsetHeight;
//       // alert(height);
//       // el.nextElementSibling.style.setProperty('--spoiler', -height + 'px');
//       el.classList.toggle('active');
//     });
// });
// });

// const app = new VTTCue({
// 	el: '#app',
// 	data: {
// 		name: 'mario'
// 	},
// 	methods: {
// 		alertHandler() {
// 			this.name = 'привет мир'
// 			alert('привет мир')
// 		}
// 	},
// })

// $('body').addClass('test')

$('.spoiler').next().slideUp();

$('.spoiler').on("click", function() {
  $(this).toggleClass('active');
  $(this).next().slideToggle()
});


