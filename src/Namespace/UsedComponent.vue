<template>
  <div>
    <p>
      Hello from the child component!
      If you change an existing line of text, a tag, or component, HMR will ignore that.
      If you add a new line, tag, or component, or remove an existing one completely, HMR will reflect that.
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
