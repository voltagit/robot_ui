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
  
const btn = document.querySelector(".btn--start")

const load = document.getElementById('loading').classList.add('hidden')
const loading = document.getElementById('loading');

var data = {
  goal: null,
  action: {
          goal: { total: 1 },
          feedback: { progress: 0 },
          result: { success: false },
          status: { status: 0, text: '' },
      }
}
console.log(data.action.result.result)
var actionClient = new ROSLIB.ActionClient({
  ros : this.ros,
              serverName : '/control',
              actionName : 'course_web_dev_ros/WaypointActionAction',
})



btn.addEventListener('click',function(){
  console.log('click2');
  loading.classList.remove('hidden')
  // setTimeout(() => {
  //   window.location = "../1-default/page3/page3.html"
  // }, 1600);
  
  
  
  
  var goal = new ROSLIB.Goal({
      actionClient: actionClient,
      goalMessage: data.action.goal.total
  })
  
  goal.on('status', (status) => {
    action.status = status
    console.log(status)
  })
  

  
  goal.on('feedback', (feedback) => {
    action.feedback = feedback
    console.log(feedback)             
              })
              
  goal.on('result', (result) => {
    data.action.result.result = result
    if (result === -1) {
      window.location = "../1-default/page3/page3.html"
      
    }else{
      console.log(result)
      window.location = "../1-default/page3/page3.html"
    }
      
          
     
              })
  
  goal.send()
  

})
    
