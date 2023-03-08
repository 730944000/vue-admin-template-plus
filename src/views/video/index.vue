<template>
  <div class="app-container">
    <video height="500" width="1080" controls autoplay loop>
      <!-- <source :src="require('@/assets/video/bgVideo.mp4')" type="video/mp4"> -->
      您的浏览器不支持 video 标签。
    </video>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<style scoped>
.app-container{
 display: flex;
 justify-content: center;
}
video{
  text-align: center;
}
</style>

