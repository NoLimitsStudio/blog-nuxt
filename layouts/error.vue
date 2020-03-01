<template>
  <section class="not-found">
    <div class="container">
      <div class="not-found__wrapper">
        <p class="title">
          Page not found
        </p>
        <nuxt-link to="/">
          Back to Main page
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Error'
}
</script>

<style scoped>
  .not-found__wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 80vh;
  }
</style>
