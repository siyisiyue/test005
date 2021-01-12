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
          <el-button type="primary" @click="btnHandler">添加事项</el-button>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-card class="box-card2" :body-style="{ padding: '0px' }">
            <ul>
              <li v-for="(item, i) in getView">
                <el-row>
                  <el-col :span="2">
                    <el-checkbox
                      :value="item.done"
                      @change="
                        (x) => {
                          checkboxHandler(x, item.id)
                        }
                      "
                    ></el-checkbox>
                  </el-col>
                  <el-col :span="20">
                    {{ item.info }}
                  </el-col>
                  <el-col :span="2">
                    <el-link
                      type="primary"
                      :underline="false"
                      @click="removeItemById(item.id)"
                      >删除</el-link
                    >
                  </el-col>
                </el-row>
              </li>
              <li>
                <el-row>
                  <el-col :span="6">{{ showDoneNum }}</el-col>
                  <el-col :span="12">
                    <el-button-group>
                      <el-button :type="getPrimary('all')" @click="changeViewHandler('all')">全部</el-button>
                      <el-button :type="getPrimary('undone')" @click="changeViewHandler('undone')">未完成</el-button>
                      <el-button :type="getPrimary('done')" @click="changeViewHandler('done')">已完成</el-button>
                    </el-button-group>
                  </el-col>
                  <el-col :span="6" style="text-align: right">
                    <el-link
                      type="primary"
                      :underline="false"
                      @click="cleardoneHandler"
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
    <el-row>
      <p>{{$store.state.info}}</p>
      <p><el-button @click="btnHandler2">点击</el-button></p>
    </el-row>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex'
export default {
  data() {
    return {
    
    }
  },
  created() {
    this.$store.dispatch('getList')
  },
  computed: {
    ...mapGetters(['showDoneNum','getPrimary','getView']),
    ...mapState(['inputValue', 'viewKey']),
  },
  methods: {
    ...mapMutations([
      'setInputValue',
      'addList',
      'removeListById',
      'changeStatus',
      'clearDone',
      'changeView'
    ]),
    inputHandler(v) {
      this.setInputValue(v)
    },
    btnHandler() {
      if (this.inputValue.trim().length == 0) {
        this.$message({
          message: '文本不能为空',
          type: 'warning',
        })
        return
      }
      this.addList()
    },
    removeItemById(id) {
      //this.$store.commit("removeListById",id)
      this.removeListById(id)
    },
    checkboxHandler(v, id) {
      const param = {
        id: id,
        done: v,
      }
      this.changeStatus(param)
    },
    cleardoneHandler() {
      this.clearDone()
    },
    changeViewHandler(v) {
      this.changeView(v)
    },
    btnHandler2(){
      this.$store.commit('changeInfo')
    }
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