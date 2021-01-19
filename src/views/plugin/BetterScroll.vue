<template>
  <div>
    <h3>Better-Scroll</h3>
    <p>npm install better-scroll --save</p>
    <p>1.基本使用</p>
    <div class="swarper">
      <ul>
        <li>显示内容1</li>
        <li>显示内容2</li>
        <li>显示内容3</li>
        <li>显示内容4</li>
        <li>显示内容5</li>
        <li>显示内容6</li>
        <li>显示内容7</li>
        <li>显示内容8</li>
        <li>显示内容9</li>
        <li>显示内容10</li>
        <li>显示内容11</li>
        <li>显示内容12</li>
        <li>显示内容13</li>
        <li>显示内容14</li>
        <li>显示内容15</li>
        <li>显示内容16</li>
        <li>显示内容17</li>
        <li>显示内容18</li>
        <li>显示内容19</li>
        <li>显示内容20</li>
        <li>显示内容21</li>
        <li>显示内容22</li>
        <li>显示内容23</li>
        <li>显示内容24</li>
        <li>显示内容25</li>
        <li>显示内容26</li>
        <li>显示内容27</li>
        <li>显示内容28</li>
        <li>显示内容29</li>
        <li>显示内容30</li>
        <li>显示内容31</li>
        <li>显示内容32</li>
        <li>显示内容33</li>
        <li>显示内容34</li>
        <li>显示内容35</li>
        <li>显示内容36</li>
        <li>显示内容37</li>
        <li>显示内容38</li>
        <li>显示内容39</li>
        <li>显示内容40</li>
        <li>显示内容41</li>
        <li>显示内容42</li>
        <li>显示内容43</li>
        <li>显示内容44</li>
        <li>显示内容45</li>
        <li>显示内容46</li>
        <li>显示内容47</li>
        <li>显示内容48</li>
        <li>显示内容49</li>
        <li>显示内容50</li>
        <li>显示内容51</li>
        <li>显示内容52</li>
        <li>显示内容53</li>
        <li>显示内容54</li>
        <li>显示内容55</li>
        <li>显示内容56</li>
        <li>显示内容57</li>
        <li>显示内容58</li>
        <li>显示内容59</li>
        <li>显示内容60</li>
        <li>显示内容61</li>
        <li>显示内容62</li>
        <li>显示内容63</li>
        <li>显示内容64</li>
        <li>显示内容65</li>
        <li>显示内容66</li>
        <li>显示内容67</li>
        <li>显示内容68</li>
        <li>显示内容69</li>
        <li>显示内容70</li>
        <li>显示内容71</li>
        <li>显示内容72</li>
        <li>显示内容73</li>
        <li>显示内容74</li>
        <li>显示内容75</li>
        <li>显示内容76</li>
        <li>显示内容77</li>
        <li>显示内容78</li>
        <li>显示内容79</li>
        <li>显示内容80</li>
        <li>显示内容81</li>
        <li>显示内容82</li>
        <li>显示内容83</li>
        <li>显示内容84</li>
        <li>显示内容85</li>
        <li>显示内容86</li>
        <li>显示内容87</li>
        <li>显示内容88</li>
        <li>显示内容89</li>
        <li>显示内容90</li>
        <li>显示内容91</li>
        <li>显示内容92</li>
        <li>显示内容93</li>
        <li>显示内容94</li>
        <li>显示内容95</li>
        <li>显示内容96</li>
        <li>显示内容97</li>
        <li>显示内容98</li>
        <li>显示内容99</li>
        <li>显示内容100</li>
      </ul>
    </div>
  </div>
</template>

<script>

import BetterScroll from 'better-scroll'

export default {
  data() {
    return {
      scroll: null,
    }
  },
  created() {
    //这里不能取到dom
  },
  //组件挂载后
  mounted() {
    this.scroll = new BetterScroll(document.querySelector('.swarper'), {
      probeType: 2,
      pullUpLoad: true,
    })

    this.scroll.on('scroll', (postion) => {
      //console.log(postion)
    })
    this.scroll.on('pullingUp',()=>{
        console.log('上啦加载更多')
        this.scroll.finishPullUp();
    })
  },
  methods: {},
}
</script>

<style scoped >
.swarper {
  height: 200px;
  background: var(--color-tint);
  overflow: hidden;
}
</style>
