<template>
  <div class="home">
    <img :src="require('@/assets/img/home.jpg')" mode="scaleToFill">
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {}
}
</script>
<style lang="scss" scoped>
.home {
  img {
    width: 100% !important;
    height: 100% !important;
  }
}
</style>
