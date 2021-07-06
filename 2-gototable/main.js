var app = new Vue({
    el: '#app',
    // computed values
    
    
    computed: {
        ws_address: function() {
            rosbridge_address = "ws://0.0.0.0:9090";

            return (this.rosbridge_address)
        },
    },
    // storing the state of the page
    data: {
        connected: false,
        ros: null,
        logs: [],
        loading: false,
        topic: null,
        message: null,
        rosbridge_address: '',
        port: '9090',
    },
    // helper methods to connect to ROS
    methods: {
        connect: function() {

            this.loading = true
            this.ros = new ROSLIB.Ros({
                url: this.ws_address
            })
            this.ros.on('connection', () => {
                this.logs.unshift((new Date()).toTimeString() + ' - Connected!')
                this.connected = true
                this.loading = false
               
            })
            this.ros.on('error', (error) => {
                this.logs.unshift((new Date()).toTimeString() +  - Error)
            })
            this.ros.on('close', () => {
                this.logs.unshift((new Date()).toTimeString() + ' - Disconnected!')
                this.connected = false
                this.loading = false
               
            })
        },
        disconnect: function() {
            this.ros.close()
        },setTopic: function() {
            this.topic = new ROSLIB.Topic({
                ros: this.ros,
                // name: '/cmd_vel',
                messageType: 'std_msgs/String.msg'
            })
        },setTopicStop: function() {
            this.topic = new ROSLIB.Topic({
                ros: this.ros,
                name: '/cmd_vel',
                messageType: 'geometry_msgs/Twist'
            })
        },
        forward: function() {
            this.message = new ROSLIB.Message({
                data : 'table'
            })
            this.setTopic()
            this.topic.publish(this.message)
            console.log("table")
        },
        turnRight: function() {
            this.message = new ROSLIB.Message({
                data : 'room'
            })
            this.setTopic()
            this.topic.publish(this.message)
            console.log("room")
        },
        
        Stop: function() {
            this.message = new ROSLIB.Message({
                linear: { x: 0, y: 0, z: 0, },
                angular: { x: 0, y: 0, z: 0, },
            })
            this.setTopicStop()
            this.topic.publish(this.message)
        },
        backward: function() {
            this.message = new ROSLIB.Message({
                data : 'Door'
            })
            this.setTopic()
            this.topic.publish(this.message)
            console.log("Door")
        },
        turnLeft: function() {
            this.message = new ROSLIB.Message({
                data : 'Tv'
            })
            this.setTopic()
            this.topic.publish(this.message)
            console.log("Tv")
        },
}})