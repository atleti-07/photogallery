// JavaScript
//console.log('Hello world!');

const loading = document.getElementById('loading');

function animation(){
  loading.classList.add('loaded');
}
//window.addEventListener('load', animation);
window.setTimeout( animation, 1000 );

const thumbs = document.querySelectorAll('.thumb');
const main = document.querySelector('#main-image');
const text = document.querySelector('#caption');

//マウスオーバー
thumbs.forEach(function(item, index) {
  item.onmouseover = function() {
    main.src = this.dataset.image;
    text.textContent = this.title;
  }
});
