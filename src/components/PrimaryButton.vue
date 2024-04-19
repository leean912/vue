<template>
  <div style="text-align: center; font-family: sans-serif">
    <button @click="onClick" class="Button">
      <slot>Button</slot>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    onClick: {
      type: Function,
      required: true
    }
  }
}
</script>