// Scene 1
AFRAME.registerComponent('audiohandler1_1', {
    init: function() {
      let audio = document.querySelector("#audio1_1");
      this.el.addEventListener('click', async() => { 
        if(!AudioPlaying) {
          AudioPlaying = true;
          let i = 1;
          while(i<2){
            await sleep(25).then(()=>{
              i=i+0.01;
              document.querySelector('#camera').setAttribute('zoom', i)
            })
          }
          audio.play()
        }
      });
      audio.addEventListener('ended', async() => {
        if(Scene1Info.indexOf("audio1_1") === -1) {
          let i = 2;
          while(i>1){
            await sleep(25).then(()=>{
              i=i-0.01;
              document.querySelector('#camera').setAttribute('zoom', i)
            })
          }
          Scene1Info.push("audio1_1") 
        }
        AudioPlaying = false;
        console.log(Scene1Info)
      })
    }
  })

  AFRAME.registerComponent('audiohandler1_4', {
    init: function() {
      let audio = document.querySelector("#audio1_4");
      this.el.addEventListener('click', async() => {
        if(!AudioPlaying) {
          AudioPlaying = true;
          let i = 1;
          while(i<2){
            await sleep(25).then(()=>{
              i=i+0.01;
              document.querySelector('#camera').setAttribute('zoom', i)
            })
          }
          audio.play()
        }
      });
      audio.addEventListener('ended', async() => {
        if(Scene1Info.indexOf("audio1_4") === -1) {
          let i = 2;
          while(i>1){
            await sleep(25).then(()=>{
              i=i-0.01;
              document.querySelector('#camera').setAttribute('zoom', i)
            })
          }
          Scene1Info.push("audio1_4")
        }
        AudioPlaying = false;
        console.log(Scene1Info)
      })
    }
  })

  AFRAME.registerComponent('audiohandler1_3', {
    init: function() {
      let audio = document.querySelector("#audio1_3");
      this.el.addEventListener('click', async() => {
        if(!AudioPlaying) {
          AudioPlaying = true;
          let i = 1;
              while(i<2){
                await sleep(25).then(()=>{
                  i=i+0.01;
                  document.querySelector('#camera').setAttribute('zoom', i)
                })
              }
            audio.play()
        }
      });
      audio.addEventListener('ended', async() => {
        if(Scene1Info.indexOf("audio1_3") === -1) {
          let i = 2;
          while(i>1){
            await sleep(25).then(()=>{
              i=i-0.01;
              document.querySelector('#camera').setAttribute('zoom', i)
            })
          }
          Scene1Info.push("audio1_3")
        }
        AudioPlaying = false;
        console.log(Scene1Info)
      })
    }
  })

  AFRAME.registerComponent('audiohandler1_2', {
    init: function() {
      let audio = document.querySelector("#audio1_2");
      this.el.addEventListener('click', async() => {
        if(!AudioPlaying) {
          AudioPlaying = true;
          let i = 1;
              while(i<2){
                await sleep(25).then(()=>{
                  i=i+0.01;
                  document.querySelector('#camera').setAttribute('zoom', i)
                })
              }
          audio.play()
        }
      });
      audio.addEventListener('ended', async() => {
        if(Scene1Info.indexOf("audio1_2") === -1) {
          let i = 2;
          while(i>1){
            await sleep(25).then(()=>{
              i=i-0.01;
              document.querySelector('#camera').setAttribute('zoom', i)
            })
          }
          Scene1Info.push("audio1_2")
        }
        AudioPlaying = false;
        console.log(Scene1Info)
      })
    }
  })
  
  AFRAME.registerComponent('spacial_audiohandler1_2', {
    init: function() {
      let audio = document.querySelector("#spacial_audio1_2");
      this.el.addEventListener('click', () => {
        if(Scene1Info.indexOf("audio1_2") === -1 && !AudioPlaying) {
          AudioPlaying = true;
          audio.play()
        }  
      });
      audio.addEventListener('ended', () => {
        AudioPlaying = false;
        console.log(Scene1Info)
      })
    }
  })

  AFRAME.registerComponent('spacial_audiohandler1_3', {
    init: function() {
      let playing = false;
      let audio = document.querySelector("#spacial_audio1_3");
      this.el.addEventListener('click', () => {
        if(Scene1Info.indexOf("audio1_3") === -1 && !AudioPlaying) {
          AudioPlaying = true;
          audio.play()
        }  
      });
      audio.addEventListener('ended', () => {
        AudioPlaying = false;
        console.log(Scene1Info)
      })
    }
  })
 

// Scene 2
AFRAME.registerComponent('audiohandler2_1', {
  init: function() {
    let audio = document.querySelector("#audio2_1");
    this.el.addEventListener('click', async() => { 
      if(!AudioPlaying) {
        AudioPlaying = true;
        let i = 1;
        while(i<2){
          await sleep(25).then(()=>{
            i=i+0.01;
            document.querySelector('#camera').setAttribute('zoom', i)
          })
        }
        audio.play()
      }
    });
    audio.addEventListener('ended', async() => {
      if(Scene2Info.indexOf("audio2_1") === -1) {
        let i = 2;
        while(i>1){
          await sleep(25).then(()=>{
            i=i-0.01;
            document.querySelector('#camera').setAttribute('zoom', i)
          })
        }
        Scene2Info.push("audio2_1") 
      }
      AudioPlaying = false;
      console.log(Scene2Info)
    })
  }
})


AFRAME.registerComponent('audiohandler2_2', {
  init: function() {
    let audio = document.querySelector("#audio2_2");
    this.el.addEventListener('click', async() => { 
      if(!AudioPlaying) {
        AudioPlaying = true;
        let i = 1;
        while(i<2){
          await sleep(25).then(()=>{
            i=i+0.01;
            document.querySelector('#camera').setAttribute('zoom', i)
          })
        }
        audio.play()
      }
    });
    audio.addEventListener('ended', async() => {
      if(Scene2Info.indexOf("audio2_2") === -1) {
        let i = 2;
        while(i>1){
          await sleep(25).then(()=>{
            i=i-0.01;
            document.querySelector('#camera').setAttribute('zoom', i)
          })
        }
        Scene2Info.push("audio2_2") 
      }
      AudioPlaying = false;
      console.log(Scene2Info)
    })
  }
})


AFRAME.registerComponent('audiohandler2_3', {
  init: function() {
    let audio = document.querySelector("#audio2_3");
    this.el.addEventListener('click', async() => { 
      if(!AudioPlaying) {
        AudioPlaying = true;
        let i = 1;
        while(i<2){
          await sleep(25).then(()=>{
            i=i+0.01;
            document.querySelector('#camera').setAttribute('zoom', i)
          })
        }
        audio.play()
      }
    });
    audio.addEventListener('ended', async() => {
      if(Scene2Info.indexOf("audio2_3") === -1) {
        let i = 2;
        while(i>1){
          await sleep(25).then(()=>{
            i=i-0.01;
            document.querySelector('#camera').setAttribute('zoom', i)
          })
        }
        Scene2Info.push("audio2_3") 
      }
      AudioPlaying = false;
      console.log(Scene2Info)
    })
  }
})


AFRAME.registerComponent('audiohandler2_4', {
  init: function() {
    let audio = document.querySelector("#audio2_4");
    this.el.addEventListener('click', async() => { 
      if(!AudioPlaying) {
        AudioPlaying = true;
        let i = 1;
        while(i<2){
          await sleep(25).then(()=>{
            i=i+0.01;
            document.querySelector('#camera').setAttribute('zoom', i)
          })
        }
        audio.play()
      }
    });
    audio.addEventListener('ended', async() => {
      if(Scene2Info.indexOf("audio2_4") === -1) {
        let i = 2;
        while(i>1){
          await sleep(25).then(()=>{
            i=i-0.01;
            document.querySelector('#camera').setAttribute('zoom', i)
          })
        }
        Scene2Info.push("audio2_4") 
      }
      AudioPlaying = false;
      console.log(Scene2Info)
    })
  }
})


AFRAME.registerComponent('audiohandler2_5', {
  init: function() {
    let audio = document.querySelector("#audio2_5");
    this.el.addEventListener('click', async() => { 
      if(!AudioPlaying) {
        AudioPlaying = true;
        let i = 1;
        while(i<2){
          await sleep(25).then(()=>{
            i=i+0.01;
            document.querySelector('#camera').setAttribute('zoom', i)
          })
        }
        audio.play()
      }
    });
    audio.addEventListener('ended', async() => {
      if(Scene2Info.indexOf("audio2_5") === -1) {
        let i = 2;
        while(i>1){
          await sleep(25).then(()=>{
            i=i-0.01;
            document.querySelector('#camera').setAttribute('zoom', i)
          })
        }
        Scene2Info.push("audio2_5") 
      }
      AudioPlaying = false;
      console.log(Scene2Info)
    })
  }
})


AFRAME.registerComponent('audiohandler2_6', {
  init: function() {
    let audio = document.querySelector("#audio2_6");
    this.el.addEventListener('click', async() => { 
      if(!AudioPlaying) {
        AudioPlaying = true;
        let i = 1;
        while(i<2){
          await sleep(25).then(()=>{
            i=i+0.01;
            document.querySelector('#camera').setAttribute('zoom', i)
          })
        }
        audio.play()
      }
    });
    audio.addEventListener('ended', async() => {
      if(Scene2Info.indexOf("audio2_6") === -1) {
        let i = 2;
        while(i>1){
          await sleep(25).then(()=>{
            i=i-0.01;
            document.querySelector('#camera').setAttribute('zoom', i)
          })
        }
        Scene2Info.push("audio2_6") 
      }
      AudioPlaying = false;
      console.log(Scene2Info)
    })
  }
})

AFRAME.registerComponent('spacial_audiohandler2_1', {
  init: function() {
    let audio = document.querySelector("#spacial_audio2_1");
    this.el.addEventListener('click', () => {
      if(Scene2Info.indexOf("audio2_1") === -1 && !AudioPlaying) {
        AudioPlaying = true;
        audio.play()
      }  
    });
    audio.addEventListener('ended', () => {
      AudioPlaying = false;
    })
  }
})

AFRAME.registerComponent('spacial_audiohandler2_2', {
  init: function() {
    let audio = document.querySelector("#spacial_audio2_2");
    this.el.addEventListener('click', () => {
      if(Scene2Info.indexOf("audio2_2") === -1 && !AudioPlaying) {
        AudioPlaying = true;
        audio.play()
      }  
    });
    audio.addEventListener('ended', () => {
      AudioPlaying = false;
    })
  }
})

AFRAME.registerComponent('spacial_audiohandler2_3', {
  init: function() {
    let audio = document.querySelector("#spacial_audio2_3");
    this.el.addEventListener('click', () => {
      if(Scene2Info.indexOf("audio2_3") === -1 && !AudioPlaying) {
        AudioPlaying = true;
        audio.play()
      }  
    });
    audio.addEventListener('ended', () => {
      AudioPlaying = false;
    })
  }
})

AFRAME.registerComponent('spacial_audiohandler2_4', {
  init: function() {
    let audio = document.querySelector("#spacial_audio2_4");
    this.el.addEventListener('click', () => {
      if(Scene2Info.indexOf("audio2_4") === -1 && !AudioPlaying) {
        AudioPlaying = true;
        audio.play()
      }  
    });
    audio.addEventListener('ended', () => {
      AudioPlaying = false;
    })
  }
})

AFRAME.registerComponent('spacial_audiohandler2_5', {
  init: function() {
    let audio = document.querySelector("#spacial_audio2_5");
    this.el.addEventListener('click', () => {
      if(Scene2Info.indexOf("audio2_5") === -1 && !AudioPlaying) {
        AudioPlaying = true;
        audio.play()
      }  
    });
    audio.addEventListener('ended', () => {
      AudioPlaying = false;
    })
  }
})

AFRAME.registerComponent('spacial_audiohandler2_6', {
  init: function() {
    let audio = document.querySelector("#spacial_audio2_6");
    this.el.addEventListener('click', () => {
      if(Scene2Info.indexOf("audio2_6") === -1 && !AudioPlaying) {
        AudioPlaying = true;
        audio.play()
      }  
    });
    audio.addEventListener('ended', () => {
      AudioPlaying = false;
    })
  }
})