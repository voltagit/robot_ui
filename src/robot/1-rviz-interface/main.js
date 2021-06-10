var app = new Vue({
    el: '#app',
    // storing the state of the page
    data: {
        connected: false,
        ros: null,
        logs: [],
        loading: false,
        rosbridge_address: '',
        port: '9090',
        service_busy: false,
        mapViewer:null,
        mapGrindClient:null,
        interval:null,
       
    },
    // helper methods to connect to ROS
    methods: {
        connect: function() {
            this.loading = true
            this.ros = new ROSLIB.Ros({
                url: this.rosbridge_address
            })
            this.ros.on('connection', () => {
                this.logs.unshift((new Date()).toTimeString() + ' - Connected!')
                this.connected = true
                this.loading = false

            this.mapViewer = new ROS2D.OccupancyGridClient({
                // name: '/map',
                divID: 'map',
                width: 420,
                heigth: 360,

            })

            this.mapGrindClient = new ROS2D.OccupancyGridClient({
                ros: this.ros,
                // name:'/map',
                rootObject: this.mapViewer.scene,
                continuous: true,
                
            })
           this.mapGrindClient('change',()=>{
               this.mapViewer.scaleToDimensions(this.mapGrindClient.currentGrind.width,this.mapGrindClient.currentGrind.heigth);
               this.mapViewer.shift(this.mapGrindClient.currentGrid.pose.position.x,this.mapGrindClient.currentGrid.pose.position.y)

           })
            })
            this.ros.on('error', (error) => {
                // this.logs.unshift((new Date()).toTimeString() +  - Error: ${error})
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
        },
        mounted(){

        }
        
     }} )
    


    // properties: {
    //     cellSize: {
    //       notify: true,
    //       type: Number,
    //       value: 1,
    //     },
    //     color: {
    //       type: String,
    //       value: '#cccccc',
    //       notify: true,
    //     },
    //     isShown: Boolean,
    //     name: {
    //       type: String,
    //       value: 'Grid',
    //     },
    //     numCells: {
    //       notify: true,
    //       type: Number,
    //       value: 10,
    //     },
    //     viewer: {
    //       type: Object,
    //     },
    //     _grid: Object,
    //   },
    // occupyGrid: function(){
    //     let topic = new ROSLIB.topic({
    //         isShown: true,
    //         name: "Map",
    //         options: {
    //           continuous: true,
    //           opacity: 1,
    //           topic: "/map",
    //           rootObject: this.viewer.scene,
    //           offsetPose: null,
    //           color: {
    //             r: 255,
    //             g: 255,
    //             b: 255}
    //         },opacity: this.opacity,
    //         type: "Type: nav_msgs/OccupancyGrid"
           
           
            
    //       })
    // },

    // gridClient:function(){
    // gridClient = new ROS2D.OccupancyGridClient({
    //     ros : ros,
    //     rootObject : viewer.scene,
    //     continuous : true
    // })},



    // tf: function(){
    //     let topic = new ROSLIB.topic({
    //         ros: this.ros,
    //         name: '/tf',
    //         messageType: 'tf2_msgs/TFMessage',
    //     })

    // },

    // grid: function(){


    //     this._grid = new ROS3D.Grid({
    //         cellSize: this.cellSize,
    //         color: this.color,
    //         lineWidth: this.lineWidth,
    //         num_cells: this.numCells,
      
    // })
// },

//    gridtest: function(){
//       var topic = new ROS2D.viewer ({
//           isShown: true,

//     name: "Grid",
//     options: {
//       cellSize: "1",
//       color: "#cccccc",
//       numCells: "10"
//     },
//     type: "grid" 
//    }) 
// }}

// viewer: function(){
//     viewer = new ROS2D.Viewer({
//         divID: 'map',
//         width: 600,
//         height:500
//     })
// }
        
    
// })






// const btngrid = document.querySelector('.btn--grid');

// btngrid.addEventListener('click', function () {

// const occupyGrid = function(){
//     var topic = new ROSLIB.Topic({
//         isShown: true,
//         name: "Map",
//         options: {
//           continuous: true,
//           opacity: 1,
//           topic: "/map",
//           type: "occupancyGrid"
//         },
        
//         })
//     },
// })



