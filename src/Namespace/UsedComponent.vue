<template>
  <div>
    <p>
      Hello from the nested component!
      HMR won't update text nodes when the sideEffects option is set!
      However, it will update the dynamic text and tags should you change them.
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
      dynamicText: 'Dynamic text'
    }
  }
}
</script>
