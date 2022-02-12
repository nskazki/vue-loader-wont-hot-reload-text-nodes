<template>
  <div>
    <p>
      Hello from the root component!
      HMR won't apply any changes made to this component as long as the sideEffects option is set.
      The problem is that without this option, unused components won't be tree-shaked if they're re-exported along with used components via a common proxy.
      src/Namespace/index.js is an example of such a proxy.
    </p>
    <hr />
    <used-component />
  </div>
</template>

<script>
import { UsedComponent } from './Namespace'

export default {
  components: {
    UsedComponent
  }
}
</script>
