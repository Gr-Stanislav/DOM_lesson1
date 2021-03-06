const btn = document.querySelector('.btn');
const fon = document.querySelector('.black_fon');

btn.onclick = function (){
    fon.style.display = 'block';
};

const close = document.querySelector('.close');
close.onclick = function (){
    fon.style.display = 'none';
};

// Вроде так должно было быть