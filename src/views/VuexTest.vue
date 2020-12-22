<template>
  <div>
    <my-jiafa></my-jiafa>
    <p>-----------------------------------</p>
    <my-jianfa></my-jianfa>
  </div>
</template>

<script>
import Jiafa from '../components/Vuex/jiafa.vue'
import Jianfa from '../components/Vuex/jianfa.vue'
export default {
  data() {
    return {}
  },
  components: {
    'my-jiafa': Jiafa,
    'my-jianfa': Jianfa,
  },
}
</script>