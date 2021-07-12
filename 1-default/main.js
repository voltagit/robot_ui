
const ropic2 = document.querySelector(".pic2")
const picbot2 = document.getElementById("robot-2")

window.onload = function(){ 
    setTimeout(() => {
         if(!window.location.hash){
        window.location = window.location + '#loaded'
        
        window.location.reload()
}


    this.window.location = "index2.html"

    }, 2500);
    
}

    


// setTimeout(()=>{
//  ropic2.classList.add('hidden')

//     }},2100)
       
  
    
    
    
    // const ropic = document.querySelector(".pic")
    
    // setTimeout(() => {
    //     const picture_robot = document.getElementById("robot_pic").addEventListener('click', function(){
    //     console.log('click')
    //     ropic.classList.add('hidden')
    // })
    // }, 2100);

    
    

// var app = new Vue({
//     el: '#app',
//     // storing the state of the page
//     data: {
//         goal: null,
//         action: {
//             //goal: {msg: "1"},
//             // feedback: {msg: "-1"},
//             goal: { position: {x: 0, y: 0, z: 0} },
            
//             feedback: { position: 0, state: 'idle' },
//             result: { success: false },
//             status: { status: 0, text: '' },
//         }
//     },
//     methods:{
//         sendGoal: function() {
//             let actionClient = new ROSLIB.ActionClient({
//                 ros : this.ros,
//                 serverName : '/turtlebot2_action_service_as',
//                 actionName : 'course_web_dev_ros/WaypointActionAction',
                
//             })

//             this.goal = new ROSLIB.Goal({
//                 actionClient : actionClient,
//                 goalMessage: {
//                     ...this.action.goal
//                 }
//             })
           

//             this.goal.on('status', (status) => {
//                 this.action.status = status
                
//             })

//             this.goal.on('feedback', (feedback) => {
//                 this.action.feedback = feedback
               
//             })

//             this.goal.on('result', (result) => {
//                 this.action.result = result
//             })

//             this.goal.send()
//         }, 
        
//      mounted() {
//     },}

// })