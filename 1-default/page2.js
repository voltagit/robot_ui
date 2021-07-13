   var ros = new ROSLIB.Ros({
    url : 'ws://0.0.0.0:9090'
  });

 ros.on('connection', function() {
    document.getElementById("status").innerHTML = "Connected";
  });

  ros.on('error', function(error) {
    document.getElementById("status").innerHTML = "Error";
  });

  ros.on('close', function() {
    document.getElementById("status").innerHTML = "Closed";
  });
   
   
   
   const ropic = document.querySelector(".pic")
    
    
        const picture_robot = document.getElementById("robot_pic").addEventListener('click', function(){
        console.log('click')
        ropic.classList.add('hidden')
    })
    
