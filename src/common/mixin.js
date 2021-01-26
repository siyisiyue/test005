import BackTop from 'components/backtop/BackTop.vue'

export const backTopMixin = {
    data() {
        return {
            pd: false
        }
    },
    components: {
        BackTop
    },
    methods: {
        backTopHandler() {
            this.$refs.scroll.scrollTo(0, 0)
        }
    }

}