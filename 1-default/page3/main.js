
const btn = document.querySelector(".btn--accept")
const thx = document.getElementById('thanks').classList.add('hidden')
const thanks = document.getElementById('thanks');

btn.addEventListener('click',function(){
    console.log('click2');
    thanks.classList.remove('hidden')

})

setTimeout(() => {
    window.location= "../page3/page4/page4.html"
}, 2500);
