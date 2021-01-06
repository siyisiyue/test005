<template>
  <div class="content">
    <ol>
      <li v-for="item in msgList">{{ item }}</li>
    </ol>
    <h3>1.基本使用</h3>
    <my-slot></my-slot>
    <my-slot><span>插入</span></my-slot>
    <br />
    <br />
    <h3>2.具名使用</h3>
    <my-slot-two
      ><span slot="center" style="padding: 0 10px"
        >slot的具名使用</span
      ></my-slot-two
    >
    <br />
    <br />
    <h3>3.slot作用域</h3>
    <p>默认</p>
    <slot-child-three></slot-child-three>
    <p>重构</p>
    <slot-child-three>
      <template slot-scope="childData">
        <p>{{ childData.data.join(',') }}</p>
      </template>
    </slot-child-three>
  </div>
</template>

<script>
import SlotChild from '../../components/Vue/Slot/SlotChild.vue'
import SlotChildTwo from '../../components/Vue/Slot/SlotChild2.vue'
import SlotChildThree from '../../components/Vue/Slot/SlotChild3.vue'
export default {
  data() {
    return {
      msgList: [
        '插档的基本使用<slot></slot>',
        '插槽的默认值<slot>button</slot>',
        '如果有多个值，同时放入到组件进行替换助,一起作为替换元素',
      ],
    }
  },
  components: {
    'my-slot': SlotChild,
    'my-slot-two': SlotChildTwo,
    SlotChildThree,
  },
}
</script>

<style lang="sass" scoped>

</style>