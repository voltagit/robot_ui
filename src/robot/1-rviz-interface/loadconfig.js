{
    "globalOptions": {
      "background": "#111111",
      "colladaLoader": "collada2",
      "fixedFrame": "/base_link",
      "colladaServer": "http://localhost:8001/",
      "url": "ws://localhost:9090",
      "videoServer": "http://localhost:9999"
    },
    "sidebarOpened": true,
    "displays": [
      {
        "isShown": true,
        "name": "Grid",
        "options": {
          "cellSize": "1",
          "color": "#cccccc",
          "numCells": "10"
        },
        "type": "grid"
      },
      {
        "isShown": true,
        "name": "Markers",
        "options": {
          "topic": "/visualization_marker"
        },
        "type": "markers"
      },
      {
        "isShown": true,
        "name": "Map",
        "options": {
          "color": {
            "r": 255,
            "g": 255,
            "b": 255
          },
          "continuous": true,
          "opacity": "1",
          "topic": "/map"
        },
        "type": "occupancyGrid"
      },
      {
        "isShown": true,
        "name": "TF",
        "options": {},
        "type": "tf"
      },
      {
        "isShown": true,
        "name": "Robot model",
        "options": {
          "param": "robot_description"
        },
        "type": "urdf"
      },
      {
        "isShown": true,
        "name": "Interactive Markers",
        "options": {
          "topic": "/basic_controls"
        },
        "type": "interactiveMarkers"
      },
      {
        "isShown": true,
        "name": "Depth cloud",
        "options": {
          "topic": "/depthcloud_encoded",
          "frameId": "/camera_rgb_optical_frame"
        },
        "type": "depthCloud"
      }
    ]
  }

  