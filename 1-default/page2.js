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

// var data = {
//   goal: null,
//   action: {
//           goal: { total: 1 },
//           feedback: { progress: 0 },
//           result: { success: false },
//           status: { status: 0, text: '' },
//       }
// }

//console.log(data.action.result.result)
var actionClient = new ROSLIB.ActionClient({
  ros : this.ros,
              serverName : '/action_server',
              actionName : 'my_robot_msgs/numberAction',
})



btn.addEventListener('click',function(){
  console.log('click2');
  loading.classList.remove('hidden')
  // setTimeout(() => {
  //   window.location = "../1-default/page3/page3.html"
  // }, 1600);
  
  
  
  
  var goal = new ROSLIB.Goal({
      actionClient: actionClient,
    goalMessage : {order: 1}
  })
  
  goal.on('status', (status) => {
    console.log('Feedback: ' + feedback.sequence)
    
  })
  

  
  goal.on('feedback', (feedback) => {
    console.log('Feedback: ' + feedback.sequence)
    console.log(feedback)             
              })
              
  goal.on('result', (result) => {
    console.log('Final Result: ' + result.sequence)
    if (result === -1) {
      window.location = "../1-default/page3/page3.html"
      
    }else{
      console.log(result)
      window.location = "../1-default/page3/page3.html"
    }
      
          
     
              })
  
  goal.send()
            

})



// btn.addEventListener('test',function(){
//   console.log('test2');
//   loading.classList.remove('hidden')


  
// function ActionClient(options) {
//   var that = this;
//   options = options || {};
//   this.ros = options.ros;
//   this.serverName = options.fibonacci,
//   this.actionName = options.actionlib_tutorials/FibonacciAction;
//   this.goals = {};

//   this.feedbackListener = new Topic({
//     ros: this.ros,
//     name: this.serverName + '/feedback',
//     messageType : this.actionName + 'Feedback',
//   });


//   this.goalTopic = new Topic({

//     ros : this.ros,

//     name : this.serverName + '/goal',

//     messageType : this.actionName + 'Goal',
//     goalMessage : {order : 1
//     }

//   });

// }
    

  
// })


