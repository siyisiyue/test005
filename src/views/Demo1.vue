<template>
  <div>
    <el-card class="box-card">
      <el-row>
        <el-col :span="12">
          <el-input
            :value="inputValue"
            placeholder="请输入任务"
            @input="inputHandler"
          ></el-input>
        </el-col>
        <el-col :span="4">
          <el-button type="primary">添加事项</el-button>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-card class="box-card2" :body-style="{ padding: '0px' }">
            <ul>
              <li v-for="(item, i) in list">
                <el-row>
                  <el-col :span="2">
                    <el-checkbox v-model="item.done"></el-checkbox>
                  </el-col>
                  <el-col :span="20">
                    {{ item.info }}
                  </el-col>
                  <el-col :span="2">
                    <el-link type="primary" :underline="false"
                      >删除</el-link
                    ></el-col
                  >
                </el-row>
              </li>
              <li>
                <el-row>
                  <el-col :span="6">0条剩余</el-col>
                  <el-col :span="12">
                    <el-radio-group v-model="radio1">
                      <el-radio-button label="全部"></el-radio-button>
                      <el-radio-button label="未完成"></el-radio-button>
                      <el-radio-button label="已完成"></el-radio-button>
                    </el-radio-group>
                  </el-col>
                  <el-col :span="6" style="text-align: right">
                    <el-link type="primary" :underline="false"
                      >清除已完成</el-link
                    >
                  </el-col>
                </el-row>
              </li>
            </ul>
          </el-card>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data() {
    return {
      radio1: '全部',
    }
  },
  created() {
    this.$store.dispatch('getList')
  },
  computed: {
    ...mapState(['list', 'inputValue']),
  },
  methods: {
    ...mapMutations(['setInputValue']),
    inputHandler(v) {
      this.setInputValue(v)
    },
  },
}
</script>



<style  scoped>
.box-card2 {
  min-height: 200px;
}
ul {
  list-style: none;
  text-align: left;
  padding: 0;
  font-size: 14px;
}
ul li {
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #ebeef5;
  color: #999;
}
</style>