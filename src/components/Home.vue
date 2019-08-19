<template>
    <section class="home">
  
      <div class="container">
        
  
        <div class="box">
          <div class="bar">
            <ul><a href="#home" class="button-style">Home</a></ul>
            <ul><a href="#projects" class="button-style">Projects</a></ul>
            <ul><a href="#contact" class="button-style">Contact</a></ul>
            <ul><a href="#blog" class="button-style">Blogs</a></ul>
            
          </div>
            
        </div>
            <div class="welcome-message">
             <p>I'm Iyatan Atchoro and I'm a software engineering student at mcgill university.
              Currently working at <span class="company">Bell</span> in Bell Media Division</p>
              <p>I work with </p>
              <div >
                <vue-typer 
                  :text='["React.Js","Vue.Js","Vanilla JavaScript","Node.Js","jQuery","Java", "Ocaml","C","Html", "CSS","MySQL"]'
                  :repeat='Infinity'
                  :shuffle='false'
                  initial-action='typing'
                  :pre-type-delay='70'
                  :type-delay='70'
                  :pre-erase-delay='2000'
                  :erase-delay='250'
                  erase-style='select-all'
                  :erase-on-complete='false'
                  caret-animation='blink'
                  ></vue-typer>

                
              </div>
              

          
            </div>

  
          <vue-particles class="background"
        color="#dedede"
        :particleOpacity="0.33"
        :particlesNumber="40"
        :particleSize="4"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      >
      
      </vue-particles>

      </div>
    

    </section>
</template>

<script>
import { VueTyper } from "vue-typer";
export default {
  name: "home",
  components: {
    VueTyper
  }
};
</script>

<style scoped>
.background {
  background-color: #17141d;
  position: absolute;
  display: block;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
}
.container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
}
.button-style {
  background-image: -webkit-gradient(
    linear,
    right bottom,
    left top,
    from(#ff8a00),
    to(#da1b60)
  );
  background-image: linear-gradient(to top left, #ff8a00, #da1b60);
  color: #fff !important;
  display: inline-block;
  font-family: inherit;
  font-weight: 700;
  border: 0;
  border-radius: 2rem;
  white-space: nowrap;
  padding: 1rem 1.5rem;
  line-height: 1.4;
  position: relative;
  text-align: center;
  -webkit-transition: 70ms;
  transition: 70ms;
  position: relative;
}
.box {
  margin-top: 10px;
  background: #2e2b35;
  border-radius: 5px;
  widows: 40vw;
  color: white;
  transition: all 0.2s ease;
  text-align: center;
  position: absolute;
  z-index: 1;
  box-shadow: 0 4px 80px #070509;
}
.welcome-message {
  text-align: center;
  margin-top: 30vh;
  margin-top: 15%;
  margin-left: 30%;
  margin-right: 30%;
  color: #ffffff;
  font-size: 2em;
  z-index: 2;
}
/* .welcome-message p {
  animation: typing 3.5s steps(30, end);
} */

.bar {
  display: flex;
  flex-direction: row;
  align-content: space-between;
}
a {
  text-decoration: none;
}
ul,
li {
  list-style-type: none;
  padding-right: 50px;
  cursor: pointer;
}
ul:last-child {
  border-right: none;
}
html,
body {
  margin: 0;
  padding: 0;
}
ul:hover {
  transform: scale(1.3);
}
.company {
  color: #ea4a36;
}
.last {
  padding-right: 10px;
  border-right: 0.15em solid orange;
  animation: blink-caret 0.5s step-end infinite;
}
.bounce {
  animation-iteration-count: infinite;
  animation-duration: 1.5s;
  animation: bounce 3.6s ease infinite;
  transform-origin: 50% 50%;
}

.vue-typer {
  color: #009688;
}
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}
@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: orange;
  }
}

@media (max-width: 992px) {
  .welcome-message {
    margin-top: 80px;
    margin-left: 0%;
    margin-right: 0%;
  }
  .bar {
    max-width: 1000px;
  }
  .box {
    display: none;
  }
  .button-style {
    max-width: 10px;
  }
}
</style>
