

const btn = document.getElementById('btn');
const color = document.querySelector('.color');
const h2color = document.querySelector('h2');

btn.addEventListener('click',function() {
	const random1 = Math.round(Math.random()*255);
	const random2 = Math.round(Math.random()*255);
	const random3 = Math.round(Math.random()*255);
	const colors = 'rgba('+random1+','+random2+','+random3+')';
	document.body.style.backgroundColor = colors;
	color.textContent = colors;
});