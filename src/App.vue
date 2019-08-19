<template>
<div >
  <section id="home">
    <Home/>
    <a href="#projects"><Scrolling/></a>
    
  </section>
  <section id="projects">
    <div style="margin: 30px">
      <h1 style="text-align: center;">Some Of My Projects</h1>
      <p style="text-align: center"> Bellow are some of my personal projects. Hover on them to you can go to the repository or a demo</p>
    </div>
    <div class="all-projects-wrapper">
      <Project git_link="https://github.com/iyatan/Toronto_Waste_LookUp" live_link="https://iyatan.github.io/Toronto_Waste_LookUp/" img_link="toronto_lookup.gif" title="Toronto Waste Loookup" description="React Js App to lookup waste in toronto database. Users can search, and bookmark their favorites and it will be saved in their local storage"/>
      <Project git_link="https://github.com/iyatan/Pure-JavaScrip-Clock/" live_link="http://jsclock.iyatanapps.com/" img_link="js-clock.gif" title="Pure JavaScript Clock" description="Clock made with Pure JavaScrip and no framework."/>
      <Project git_link="https://github.com/iyatan/Drums/" live_link="http://drums.iyatanapps.com/" img_link="drums.png" title="Pure Js Drums Kit(In progress)" description="Drums Kit made with Pure JavaScrip and no framework."/>
    </div>
  </section >
  <section id="contact" class="contact-section">
    <Contact/>
  </section >
  <section id="blog" style="min-height: 100vh">
    <div style="text-align: center; margin-top: 20%; font-size: 2em">
      No blog published yet! Check back in a few days
    </div>
    
  </section>
</div>
</template>

<script>
import Home from "@/components/Home.vue";
import Scrolling from "@/components/Scrolling.vue";
import Project from "@/components/Project.vue";
import Contact from "@/components/Contact.vue";

export default {
  name: "app",
  components: {
    Home,
    Scrolling,
    Project,
    Contact
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Red+Hat+Display&display=swap");

.text {
  z-index: 40;
  position: fixed;
}
* {
  font-family: "Red Hat Display", sans-serif;
}
.all-projects-wrapper {
  display: flex;
  flex-direction: column;
}

section {
  margin-top: 0px;
  margin-bottom: 0px;
}
.contact-section {
  margin-top: 10%;
  height: 100vh;
  background-color: #17141d;
}
@media (max-width: 992px) {
  section {
  }
  .all-projects-wrapper {
  }
}
</style>
