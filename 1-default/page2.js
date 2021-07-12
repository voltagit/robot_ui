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
    
var app = new Vue({
    el: '#app',
    connect:true,
    ros: null,
    // storing the state of the page
    data: {
        goal: null,
        action: {
            //goal: {msg: "1"},
            // feedback: {msg: "-1"},
            goal: { position: {x: 0, y: 0, z: 0} },
            
            feedback: { position: 0, state: 'idle' },
            result: { success: false },
            status: { status: 0, text: '' },
        }
    },
    methods:{
        connect: function() {

               this.ros = new ROSLIB.Ros({
    url : 'ws://0.0.0.0:9090'
  });


            // this.loading = true
            // this.ros = new ROSLIB.Ros({
            //     url: this.rosbridge_address
            // })
            },
        sendGoal: function() {
            let actionClient = new ROSLIB.ActionClient({
                ros : this.ros,
                serverName : '/turtlebot2_action_service_as',
                actionName : 'course_web_dev_ros/WaypointActionAction',
                
            })

            this.goal = new ROSLIB.Goal({
                actionClient : actionClient,
                goalMessage: {
                    ...this.action.goal
                }
            })
           

            this.goal.on('status', (status) => {
                this.action.status = status
                
            })

            this.goal.on('feedback', (feedback) => {
                this.action.feedback = feedback
               
            })

            this.goal.on('result', (result) => {
                this.action.result = result
            })

            this.goal.send()
        }, 
        
     mounted() {
    },}

})