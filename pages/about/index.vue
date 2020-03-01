<template>
  <div class="wrapper-content wrapper-content--fixed">
    <section class="about">
      <div class="container">
        <h1 class="title">
          About my blog:
        </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam distinctio dolorem et facilis ipsum? Accusamus asperiores consequuntur deleniti harum ipsum iusto molestiae nam natus nulla qui. Amet harum iste perspiciatis.</p>
        <Intro title="Lorem ipsum dolor sit amet" />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam distinctio dolorem et facilis ipsum? Accusamus asperiores consequuntur deleniti harum ipsum iusto molestiae nam natus nulla qui. Amet harum iste perspiciatis.</p>
        <img src="@/assets/img/about.jpg" alt="">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam distinctio dolorem et facilis ipsum? Accusamus asperiores consequuntur deleniti harum ipsum iusto molestiae nam natus nulla qui. Amet harum iste perspiciatis.</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  head () {
    const title = 'About my SSR blog'
    const desc = 'About my SSR blog with Nuxt.js'
    const type = 'website'

    return {
      title,
      meta: [
        { hid: 'og:title', name: 'og:title', content: title },
        { hid: 'description', name: 'description', content: desc },
        { hid: 'og:description', name: 'og:description', content: desc },
        { hid: 'og:type', name: 'og:type', content: type }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .about {
    text-align: center;
    p {
      margin: 10px 0;
    }
  }
</style>
