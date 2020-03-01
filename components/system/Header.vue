<template>
  <header>
    <div class="navbar">
      <div class="container">
        <div class="navbar-content">
          <div class="logo">
            <nuxt-link to="/">
              MyBlog
            </nuxt-link>
          </div>
          <ul class="navbar-list">
            <li v-for="link in links" :key="link.title" class="navbar-item">
              <nuxt-link
                class="navbar-link"
                no-prefetch
                exact
                active-class="active"
                :title="link.title"
                :to="link.url"
              >
                {{ link.title }}
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data: () => ({
    links: [
      { title: 'Admin', url: '/admin' },
      { title: 'Blog', url: '/blog' },
      { title: 'About', url: '/about' }
    ]
  })
}
</script>

<style lang="scss" scoped>
  /*.navbar-link {*/
  /*  &.nuxt-link-exact-active {*/
  /*    color: #494ce8;*/
  /*  }*/
  /*}*/
  .logo a {
    color: #333333;
  }
</style>
