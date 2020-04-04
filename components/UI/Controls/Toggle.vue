<template>
  <div class="toggle-container">
    <span>Editor</span>
    <input id="toggle" v-model="editor" class="tgl tgl-light" type="checkbox" @change="$emit('toggle', editor)">
    <label for="toggle" class="tgl-btn" />
    <span>Preview</span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      editor: false
    }
  }
}
</script>

<style lang="scss" scoped>
  .toggle-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .tgl {
    display: none;

    + .tgl-btn {
      margin: 7px 10px;
      outline: 0;
      display: block;
      width: 4em;
      height: 2em;
      position: relative;
      cursor: pointer;
      user-select: none;
      &:after,
      &:before {
        position: relative;
        display: block;
        content: "";
        width: 50%;
        height: 100%;
      }

      &:after {
        left: 0;
      }

      &:before {
        display: none;
      }
    }

    &:checked + .tgl-btn:after {
      left: 50%;
    }
  }

  .tgl-light {
    + .tgl-btn {
      background: #9FD6AE;
      border-radius: 2em;
      padding: 2px;
      transition: all .4s ease;
      &:after {
        border-radius: 50%;
        background: #fff;
        transition: all .2s ease;
      }
    }

    &:checked + .tgl-btn {
      background: #d68956;
    }
  }
</style>
