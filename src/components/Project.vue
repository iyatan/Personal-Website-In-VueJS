<template>
<div class="project-wrapper">
  <div class="image-section">
    <img class="project-img" :src="require(`@/assets/${img_link}`)" alt="">
  </div>
  <div  class="info-section">
    <div style="min-height : 70%">
      <h1><b>{{title}}</b></h1>
      <p>{{description}}</p>
    </div>
        
        <!-- <div class="tags">
          <span>React JS</span>

        </div> -->
      
        <div class="icons-div">
          <a :href="`${git_link}`" target="_blank"><font-awesome-icon size="2x" icon="github-alt" color="#E13556" /></a>
          <a :href="`${live_link}`" target="_blank"><font-awesome-icon size="2x" icon="eye" color="#E13556" /></a>
          
        </div>
        
        
    </div>
</div>
    
</template>

<script>
export default {
  name: "project",
  props: [
    "title",
    "description",
    "hashtag",
    "img_link",
    "git_link",
    "live_link"
  ],
  data() {}
};
</script>

<style>
.project-wrapper {
  display: flex;
  border-radius: 20px;
  overflow: hidden;
  background-color: #fff;
  max-width: 100%;
  transition: all 0.2s ease-out;
  box-shadow: 0 2px 43px -4px rgba(0, 0, 0, 0.19);
  margin: 4% 10% 4% 10%;
  max-height: 30%;
}
.project-wrapper:hover {
  transform: scale(1.02);
}
.project-img {
  height: auto;
  max-width: 100%;
}
.icons-div {
  margin-bottom: 0px;
  display: flex;
  justify-content: space-around;
  align-self: flex-end;
}
.tags {
  border: 1px solid grey;
  width: 95%;
  height: 20px;
  border-radius: 3px;
  margin-left: 1%;
  margin-right: 1%;
  padding: 5px;
  text-align: start;
}
.tags:first-child {
  background-color: blue;
}
.image-section {
  width: 75%;
  border-right: 5px solid #fa7b22;
}
.info-section {
  text-align: center;
  max-width: 30%;
  position: relative;
}
@media (max-width: 992px) {
  .project-wrapper {
    flex-direction: column;
  }
  .info-section {
    max-width: unset;
    position: unset;
  }
  .image-section {
    width: auto;
    border-right: unset;
  }
}
</style>
