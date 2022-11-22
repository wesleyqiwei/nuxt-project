<template>
  <div class="container">
    <h1>activity</h1>
    <router-link
      :to="{ name: 'goods-detail', query: { name: 'wesley', age: 18 } }"
      >详情</router-link
    >
  </div>
</template>
<script>
export default {
  name: 'Activity',
  data() {
    return {}
  },
  mounted() {
    console.log('params:', this.$route.params)
  },
  methods: {}
}
</script>
<style lang="scss" scoped></style>
