particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 160, 
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#00ffff" // Cor das partículas: Ciano
    },
    "shape": {
      "type": "circle"
    },
    "opacity": {
      "value": 0.6, 
      "random": true,
      "anim": {
        "enable": true,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 2.5, 
      "random": true
    },
    "line_linked": {
      "enable": true,
      "distance": 120,
      "color": "#ff00ff", // Cor das linhas: Magenta
      "opacity": 0.3,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 1, 
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "grab" 
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": {
          "opacity": 0.8
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});