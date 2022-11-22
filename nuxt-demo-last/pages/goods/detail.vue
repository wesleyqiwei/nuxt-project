<template>
  <div class="container">
    <h1>detail</h1>
    <button class="button" @click="goToDetail">活动</button>
  </div>
</template>
<script>
export default {
  name: 'Detail',
  data() {
    return {}
  },
  mounted() {
    console.log('query:', this.$route.query)
  },
  methods: {
    goToDetail() {
      this.$router.push({
        name: 'goods-activity',
        params: { activity: 'wesley' }
      })
    }
  }
}
</script>
<style lang="scss" scoped>
button {
  color: $basic-color;
}
</style>
