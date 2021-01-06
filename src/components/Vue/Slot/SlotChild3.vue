<template>
  <div> 
      <slot :data='list'>
          <ul>
              <li v-for="item in list">{{item}}</li>
          </ul>
      </slot>
  </div>
</template>

<script>
export default {
    data() {
        return {
            list:['C#','Java','C++','Python','PHP']
        }
    }
}
</script>

<style>

</style>