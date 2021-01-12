<template>
    <div class="recommend-view">
        <div class="recommend-view-item" v-for="item in recommend">
           <a :href="item.link" target="_blank">
               <img :src="item.image" alt="">
               <div>{{item.title}}</div>
           </a>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        };
    },
    created() {

    },
    mounted() {

    },
    methods: {

    },
    props:{
        recommend:{
            type:Array,
            default:[]
        }
    }
};
</script>

<style scoped >
    .recommend-view{
        display: flex;
        padding-top: 10px;
        font-size: 13px;
        padding-bottom: 30px;
        border-bottom: 8px solid #eaeaea;
    }
    .recommend-view-item{
        flex: 1;
    }
    .recommend-view-item a{color: #333;display: inline-block;}
    .recommend-view-item img{
        width: 70px;
        margin-bottom: 5px;
    }
</style>
