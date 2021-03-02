<template>
  <div>
    <p>列表</p>
    <div class="tableList" v-for="item in types">
      <h4>{{ item }}</h4>
      <ul>
          <li :key="index" v-for="(obj,index) in data.filter(x=>x.tableName==item)" @click="btnHandler(obj.id,item)">
              {{obj.name}}
          </li>
          <li @click="btnHandler(0,item)">新增</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      types: [
        'C-2-55水泥混凝土面层检验记录表',
        'C-2-74钻(挖)孔灌注桩、地下连续墙钢筋安装检验记录表',
      ],
      data:[]
    }
  },
  created() {},
  mounted() {
      this.getList()
  },
  methods: {
    getList() {
      this.axios({
        method: 'get',
        url: '/api/Table/GetAllData'
      })
        .then((res) => {
          if (res.data.code == 0) {
            this.data = res.data.data
            this.BindData()
          } else {
            alert(res.data.msg)
          }
        })
        .catch((error) => {})
    },
    btnHandler(id,tableName){
        this.$router.push({path: '/plugins/SpreadJsBind', query: {id: id,tableName:tableName}});
    }
  },
}
</script>

<style scoped >
    li{
        cursor: pointer;
        color: rgb(34, 79, 228);
    }
</style>
