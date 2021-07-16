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
   
   
   
  
var data = {
    goal: null,
    action: {
            goal: { total: 99 },
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



//window.location = "../../index2.html"
    
    
    var goal = new ROSLIB.Goal({
        actionClient: actionClient,
        goalMessage: data.action.goal.total
    })
    
    goal.on('status', (status) => {
      data.action.status.status = status
      console.log(status)
    })
    

    
    goal.on('feedback', (feedback) => {
      data.action.feedback.progress = feedback
      console.log(feedback)             
                })
                
    goal.on('result', (result) => {
      data.action.result.result = result
      if (result === -99) {
        window.location = "../../index2.html"
        
      }else{
        console.log(result)
        window.location = "../../index2.html"
      }
        console.log(result)
            
       
                })
    
    goal.send()
    

