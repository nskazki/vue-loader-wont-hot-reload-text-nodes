<template>
  <div>
    <p>
      I'm text! If you edit me, HMR won't apply the change!
    </p>
    <p>
      {{ dynamicText }}
    </p>
    <nested-component />
  </div>
</template>

<script>
import NestedComponent from './NestedComponent.vue'

export default {
  components: {
    NestedComponent
  },
  data() {
    return {
      dynamicText: 'Some dynamic root test'
    }
  }
}
</script>
