<template>
    <div class="goods-list">
        <goods-list-item v-for="(item,index) in goods" :items='item' :key="index" />
    </div>
</template>

<script>
import GoodsListItem from './GoodsListItem.vue';

export default {
    data() {
       return{

       } 
    },
    components:{
        GoodsListItem
    },
    props:{
        goods:{
            type:Array,
            default() {
                return []
            }
        }
    },
    created() {

    },
    mounted() {

    },
    methods: {

    }
};
</script>

<style scoped >
    .goods-list{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
   .goods-list::after{
       content: ' ';
       width: 40%;
   }
</style>
