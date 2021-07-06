

window.onload = function(){ 
    setTimeout(() => {
         if(!window.location.hash){
        window.location = window.location + '#loaded'
        window.location.reload()
    }
    }, 2000);
 }

   
    const ropic = document.querySelector(".pic")
    setTimeout(() => {
        const picture_robot = document.getElementById("robot_pic").addEventListener('click', function(){
    console.log('click')
    ropic.classList.add('hidden')
    })
    }, 2100);
    