<template>
  <div class="container">
    <div>
      <h1>wesley demo</h1>
    </div>
    <div>{{ data }}</div>
    <nuxt-link to="/goods">商品</nuxt-link>
  </div>
</template>

<script>
// import Logo from '~/components/Logo.vue'
import { testRequest } from '~/api/index/index'

export default {
  components: {
    // Logo
  },
  async asyncData({ error }) {
    const data = await testRequest('10000')
    if (data) {
      return { data }
    }
    // 错误处理
    error({ statusCode: 400, message: '数据查询失败' })
  },
  //   asyncData,
  data() {
    return {
      title: 'wesley'
    }
  },
  head() {
    return {
      title: '首页',
      // vue-meta利用hid确定要更新meta
      meta: [
        { name: 'description', hid: 'description', content: 'set page meta' }
      ],
      link: [{ rel: 'favicon', href: 'favicon.ico' }]
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  padding: 20px 0;
}
</style>
