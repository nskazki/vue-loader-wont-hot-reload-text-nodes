<template>
  <div>
    <p>
      Hello from the nested component!
    </p>
    <p>
      {{ dynamicText }}
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dynamicText: 'Some dynamic nested test'
    }
  }
}
</script>
