<template>
  <div class="control">
    <label> <slot /> </label>
    <textarea
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      toggle: false,
      textType: 'html',
      textAreas: true
    }
  },
  computed: { },
  methods: {
    toggleStatus (x) {
      this.toggle = x
    }
  }
}
</script>

<style lang="scss" scoped>
  .preview {
    border: 1px solid #d9d9d9;
    padding: 1.5rem 1rem;
    background-color: #fff;
    border-radius: 15px;
  }
  .control-buttons {
    display: flex;
    align-items: center;
    margin-bottom: 15px;
    margin-top: 10px;
  }
  .forRadio {
    display: flex;
    margin-right: 4rem;
  }
  input[type=radio] {
    margin: 0 5px 0 0;
  }
</style>
