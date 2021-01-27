<template>
  <div class="detail">
    <detail-nav-bar></detail-nav-bar>
    <scroll
      class="wrapper-content"
      ref="scroll"
      @showbacktop="ShowBackTop"
      :probe-type="3"
      :pull-up-load="true"
    >
      <detail-swiper
        :banner="banner"
        @ImageIsLoad="ImageIsLoad"
      ></detail-swiper>
      <ul>
        <li>卧室列表1</li>
        <li>卧室列表2</li>
        <li>卧室列表3</li>
        <li>卧室列表4</li>
        <li>卧室列表5</li>
        <li>卧室列表6</li>
        <li>卧室列表7</li>
        <li>卧室列表8</li>
        <li>卧室列表9</li>
        <li>卧室列表10</li>
        <li>卧室列表11</li>
        <li>卧室列表12</li>
        <li>卧室列表13</li>
        <li>卧室列表14</li>
        <li>卧室列表15</li>
        <li>卧室列表16</li>
        <li>卧室列表17</li>
        <li>卧室列表18</li>
        <li>卧室列表19</li>
        <li>卧室列表20</li>
        <li>卧室列表21</li>
        <li>卧室列表22</li>
        <li>卧室列表23</li>
        <li>卧室列表24</li>
        <li>卧室列表25</li>
        <li>卧室列表26</li>
        <li>卧室列表27</li>
        <li>卧室列表28</li>
        <li>卧室列表29</li>
        <li>卧室列表30</li>
        <li>卧室列表31</li>
        <li>卧室列表32</li>
        <li>卧室列表33</li>
        <li>卧室列表34</li>
        <li>卧室列表35</li>
        <li>卧室列表36</li>
        <li>卧室列表37</li>
        <li>卧室列表38</li>
        <li>卧室列表39</li>
        <li>卧室列表40</li>
        <li>卧室列表41</li>
        <li>卧室列表42</li>
        <li>卧室列表43</li>
        <li>卧室列表44</li>
        <li>卧室列表45</li>
        <li>卧室列表46</li>
        <li>卧室列表47</li>
        <li>卧室列表48</li>
        <li>卧室列表49</li>
        <li>卧室列表50</li>
        <li>卧室列表51</li>
        <li>卧室列表52</li>
        <li>卧室列表53</li>
        <li>卧室列表54</li>
        <li>卧室列表55</li>
        <li>卧室列表56</li>
        <li>卧室列表57</li>
        <li>卧室列表58</li>
        <li>卧室列表59</li>
        <li>卧室列表60</li>
        <li>卧室列表61</li>
        <li>卧室列表62</li>
        <li>卧室列表63</li>
        <li>卧室列表64</li>
        <li>卧室列表65</li>
        <li>卧室列表66</li>
        <li>卧室列表67</li>
        <li>卧室列表68</li>
        <li>卧室列表69</li>
        <li>卧室列表70</li>
        <li>卧室列表71</li>
        <li>卧室列表72</li>
        <li>卧室列表73</li>
        <li>卧室列表74</li>
        <li>卧室列表75</li>
        <li>卧室列表76</li>
        <li>卧室列表77</li>
        <li>卧室列表78</li>
        <li>卧室列表79</li>
        <li>卧室列表80</li>
        <li>卧室列表81</li>
        <li>卧室列表82</li>
        <li>卧室列表83</li>
        <li>卧室列表84</li>
        <li>卧室列表85</li>
        <li>卧室列表86</li>
        <li>卧室列表87</li>
        <li>卧室列表88</li>
        <li>卧室列表89</li>
        <li>卧室列表90</li>
        <li>卧室列表91</li>
        <li>卧室列表92</li>
        <li>卧室列表93</li>
        <li>卧室列表94</li>
        <li>卧室列表95</li>
        <li>卧室列表96</li>
        <li>卧室列表97</li>
        <li>卧室列表98</li>
        <li>卧室列表99</li>
        <li>卧室列表100</li>
      </ul>
    </scroll>
    <bottom-bar></bottom-bar>
    <back-top @click.native="backTopHandler" v-if="pd"></back-top>
  </div>
</template>

<script>
import DetailNavBar from './childcomps/DetailNavBar.vue'
import DetailSwiper from './childcomps/DetailSwiper.vue'
import Scroll from 'components/scroll/Scroll.vue'
import BottomBar from './childcomps/DetailBottomBar.vue'

import { backTopMixin } from '@/common/mixin.js'
import { Goods } from '@/models/Detail.js'
export default {
  mixins: [backTopMixin],
  components: { DetailNavBar, DetailSwiper, Scroll ,BottomBar},
  name: 'detail',
  data() {
    return {
      id: null,
      banner: null,
      goods: null,
    }
  },
  created() {
    this.id = this.$route.params.id
    this.getDetail()
  },
  mounted() {},
  methods: {
    getDetail() {
      this.axios({
        url: '/api/Goods/GetDetails?id=' + this.id,
      }).then((res) => {
        let data = JSON.parse(res.data.description)
        console.log(data)
        this.banner = data.topImages
        this.goods = new Goods(data.itemInfo, data.itemServices, data.priceInfo)
      })
    },
    ImageIsLoad() {
      //this.controlBarTop = this.$refs.tabcontrol.$el.offsetTop
    },
    ShowBackTop(postion) {
      this.listhenShowBackTop(postion)
    },
  },
}
</script>

<style scoped >
.wrapper-content {
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 49px;
  overflow: hidden;
}
ul li {
  height: 50px;
}
.detail {
  position: relative;
  background: #fff;
  height: 100%;
  z-index: 99;
}
.bottom-bar{
  position: fixed;
  bottom: 0;
  left: 0;
}
</style>
