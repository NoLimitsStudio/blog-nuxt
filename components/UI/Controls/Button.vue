<template>
  <button
    class="btn"
    :class="btnClass"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    btnClass: {
      type: String,
      default: 'btnPrimary'
    }
  }
}
</script>

<style scoped>

</style>
