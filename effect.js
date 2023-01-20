tsParticles.load("tsparticles", {
    fpsLimit: 60,
    particles: {
      number: {
        value: 0,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: "#ffff00",
        animation: {
          enable: true,
          speed: -70,
          sync: true
        }
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: 1,
        random: false,
        animation: {
          enable: true,
          speed: 0.5,
          minimumValue: 0,
          sync: false
        }
      },
      size: {
        value: 8,
        random: { enable: true, minimumValue: 4 },
        animation: {
          enable: false,
          speed: 20,
          minimumValue: 4,
          sync: false
        }
      },
      life: {
        duration: {
          value: 2
        },
        count: 1
      },
      move: {
        angle: {
          value: 45,
          offset: 0
        },
        enable: true,
        gravity: {
          enable: true,
          acceleration: -0.5
        },
        speed: 10,
        direction: "top",
        random: false,
        straight: false,
        size: true,
        outModes: {
          default: "destroy",
          bottom: "none"
        },
        attract: {
          enable: false,
          distance: 300,
          rotate: {
            x: 600,
            y: 1200
          }
        }
      }
    },
    interactivity: {
      detectsOn: "canvas",
      events: {
        resize: true
      }
    },
    detectRetina: true,
    background: {
      color: "#000000"
    },
    emitters: {
      direction: "top",
      rate: {
        quantity: 50,
        delay: 0.01
      },
      size: {
        width: 100,
        height: 10
      },
      position: {
        x: 50,
        y: 100
      }
    }
  });
  